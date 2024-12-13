export interface IUserRequest{

    name:string;

    email:string;

    password:string;

    role:string;


}

export interface IuserObject{

    name?:string;

    email?:string;

    role?:string;

}

export interface IUserResponse{

    success:boolean;

    message?:string;

    user?:IuserObject,

}

