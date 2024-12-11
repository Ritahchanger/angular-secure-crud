import { NextFunction, Request,Response } from "express";

import Todo from "../models/todo.model";
import { todo } from "node:test";

class TodoController {

    public getTodos = async(req:Request,res:Response, next:NextFunction) =>{

        try{
            
            const { userId } = req.params;

            if(!userId){

                return res.status(400).json({success:false, message:'Not user id provided'});

            }

            const findUserTodos = await Todo.find({user:userId});

            if(!findUserTodos || findUserTodos.length === 0){

                return res.status(404).json({success:false, message:'User todos not found'});

            }

            return res.status(200).json({success:true,data:findUserTodos});

        }catch(error){

            next(error);

        }


    }

    public getTodo = async (req:Request,res:Response,next:NextFunction)=>{

        try{
    
        }catch(error){

            next(error);

        }

    }

    public addTodo = async (req:Request,res:Response,next:NextFunction)=>{

        try{

            const { user,task} = req.body;

            if(!user || !task){
                return res.status(400).json({success:false, message:'fill all fields'});
            }

            const newTodo =new Todo({

                user,
                task

            })

            await newTodo.save();

            res.status(201).json({
                success:true,
                message:'Todo created successfully'
            })

        }catch(error){

            next(error);

        }


    }

    public deleteTodo = async (req:Request,res:Response,next:NextFunction)=>{

        const { todoId  } = req.params;

        try{
            if(!todoId)  return res.status(400).json({success:false, message:'Enter todo id'});

        const deleteTodo = await Todo.findByIdAndDelete(todoId);

        if(!deleteTodo){

            return res.status(404).json({success:false, message:'The todo was not found'});

        }
        return res.status(400).json({success:false, message:'Todo deleted successfully',deletedTodo:deleteTodo});
        }
        catch(error){

            next(error);

        }

    }

    public confirmTodo = async (req:Request,res:Response,next:NextFunction)=>{

         const { todoId } = req.params;

         try{
            if(!todoId){

                return res.status(400).json({success:false, message:'No todo id'});

            }

            const todo = await Todo.findById(todoId);

            if(!todo){

                return res.status(404).json({success:false, message:'Todo not found'});

            }

            todo.completed = true;

            await todo.save();

            return res.status(200).json({success:true, message:'Todo confirmed'});

         }catch(error){
            next(error);
         }

    }



}


const todoController = new TodoController();

export default todoController;