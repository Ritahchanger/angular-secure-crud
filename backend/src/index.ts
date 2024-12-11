import express from "express";

import { Request,Response } from "express";


import dotenv from "dotenv";


dotenv.config();


const app = express();


const PORT: string | number = process.env.PORT || 8000;


app.use(express.json())

app.get("/api",(req:Request, res:Response)=>{

    res.json({message:"THE BACKEND HAS BEEN SET"})

})



app.listen(PORT,()=>{

    console.log(`Server is running on http://localhost:${PORT}`)

})