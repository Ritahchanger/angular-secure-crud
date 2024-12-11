import { NextFunction, Request,Response } from "express";

import User from "../models/user.model"

import bcrypt from "bcryptjs";

const signUp = async (req:Request,res:Response, next:NextFunction)=>{

    try{

        const { name,email,password,role } = req.body;


        if(!name || !email || !password || !role){

            return res.status(400).json({message:"All fields are required"});

        }

        const existingUser = await User.findOne({email});

        if(existingUser){

            return res.status(400).json({message:"User already exists"});

        }

        const hashedPassword = await bcrypt.hash(password,12);


        const newUser = new User({

            name,

            email,


            password:hashedPassword,

            role,


        })

        await newUser.save();

        res.status(201).json({

            message:"User created successfully",

            user:{

                name:newUser.name,

                email:newUser.email,

                role:newUser.role

            }

        })


    }catch(error){

        next(error)

    }


}

export { signUp }