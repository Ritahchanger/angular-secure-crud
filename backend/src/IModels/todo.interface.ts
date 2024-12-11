import { Document } from "mongodb";

export interface ITodo extends Document{

    task:string,

    user:string,

    completed?:boolean,

    createdAt?:Date

}