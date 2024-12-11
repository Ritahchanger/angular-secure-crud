import { Request,Response,NextFunction } from "express";

import IErrorResponse from "../IModels/error.interface";


const errorHandler = (err:IErrorResponse,req:Request, res:Response,next:NextFunction)=>{


    const statusCode = err.statusCode || 500;


    const message = err.message || 'Something went wrong. Please try again later';


    console.error(err);


    res.status(statusCode).json({

        status:'error',

        statusCode,

        message
    })
    
}

export default errorHandler;