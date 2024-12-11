import express from "express";


import config from "dotenv"


const app = express();


const PORT: string | number = process.env.PORT || 8000;



app.listen(PORT,()=>{

    console.log(`Server is running on http://localhost:${PORT}`)

})