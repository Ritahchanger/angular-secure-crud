export interface IUser{

    name:string,

    email:string,

    password:string,

    role: 'admin' | 'user' | 'manager';

    createdAt:Date;

}