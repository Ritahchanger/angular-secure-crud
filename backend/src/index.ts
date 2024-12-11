import express, { RequestHandler } from "express";

import { Request,Response } from "express";


import dotenv from "dotenv";

import errorHandler from "./mddlewares/errorHandler";


import authroute from "./routes/authroute";

import todoRoute from "./routes/todoroutes"

import connectDatabase from "./database/databaseConnection";

import authenticateKey from "./mddlewares/authMiddleware";

dotenv.config();


const app = express();


const PORT: string | number = process.env.PORT || 8000;



app.use(express.json())

app.get("/api",(req:Request, res:Response)=>{

    res.json({message:"THE BACKEND HAS BEEN SET"})

})

app.use(errorHandler);


app.use("/api/users",authroute);

app.use(authenticateKey as RequestHandler);

app.use("/api/todos",todoRoute);


app.get("/api/users/get",(req:Request,res:Response)=>{

    res.json({message:"users gotten"})

})



app.listen(PORT, ()=>{

    connectDatabase().then(()=>{

        console.log(`Server is running on http://localhost:${PORT}`)

    }).catch(error=>console.log(`There was a problem connecting to server`));

    

})