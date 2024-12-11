import express from "express";

import { Request,Response } from "express";


import dotenv from "dotenv";

import errorHandler from "./mddlewares/errorHandler";


import authroute from "./routes/authroute";

import connectDatabase from "./database/databaseConnection";

dotenv.config();


const app = express();


const PORT: string | number = process.env.PORT || 8000;



app.use(express.json())

app.get("/api",(req:Request, res:Response)=>{

    res.json({message:"THE BACKEND HAS BEEN SET"})

})

app.use(errorHandler);


app.use("/api/users",authroute);


app.listen(PORT, ()=>{

    connectDatabase().then(()=>{
        
        console.log(`Server is running on http://localhost:${PORT}`)

    }).catch(error=>console.log(`There was a problem connecting to server`));

    

})