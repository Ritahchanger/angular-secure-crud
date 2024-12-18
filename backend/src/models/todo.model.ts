import mongoose from "mongoose";

import { ITodo } from "../IModels/todo.interface";

const todoSchema:mongoose.Schema = new mongoose.Schema(

    {
        task:{
            type:String,
            required:true,
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        completed:{
            type:Boolean,
            default:false,
        },
        createdAt:{
            default:Date.now,
            type:Date,
        }

    }

)

const Todo = mongoose.model<ITodo>("Todo",todoSchema);

export default  Todo;