import { Document } from "mongodb";


export interface IUser extends Document{

    name:string,

    email:string,

    password:string,

    role: 'admin' | 'user' | 'manager';

    createdAt:Date;

}