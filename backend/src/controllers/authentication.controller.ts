import { NextFunction, Request, RequestHandler, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";

import dotenv from "dotenv"

import jwt from 'jsonwebtoken';



dotenv.config()

class AuthenticationController {

  
    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
          
            const { name, email, password, role } = req.body;

            
            if (!name || !email || !password || !role) {
                return res.status(400).json({ message: "All fields are required" });
            }

           
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            
            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                role,
            });

          
            await newUser.save();

            res.status(201).json({
                message: "User created successfully",
                user: {
                    name: newUser.name,
                    email: newUser.email,
                    role: newUser.role
                }
            });

        } catch (error) {
           
            next(error);
        }
    }

    public login =  async (req:Request,res:Response,next:NextFunction)=>{

        const { email,password } = req.body

        try{
            if(!email || !password){
                return res.status(400).json({message:"Enter all fields"})
            }
            const user = await User.findOne({ email });
    
            if(!user){
                return res.status(404).json({success:false,message:"User not found"});
            }
    
            const hashedPassword = user.password;
    
            const isMatch = await bcrypt.compare(password, hashedPassword);  
    
            if(!isMatch){
    
                return res.status(404).json({success:false,message:"Wrong password"});
    
            }
    
            console.log(process.env.JWT_SECRET);
            const token = jwt.sign(
                { id: user.id, role: user.role },
                 process.env.JWT_SECRET as string,
                { expiresIn: '1h' }
            );

            res.cookie('token',token,{

                httpOnly:true,

                secure:process.env.NODE_ENV === 'production',

                sameSite:'strict' as const,

                maxAge:3600000
                

            })
            
            return res.status(200).json({success:true,message:'access granted',token:token})
        }catch(error){
            next(error)
        }
    }
}

const authenticationController = new AuthenticationController();

export default authenticationController;

console.log(process.env.JWT_SECRET)
