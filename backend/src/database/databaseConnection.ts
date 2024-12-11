import mongoose from "mongoose";

import dotenv from "dotenv";
import { connect } from "http2";

dotenv.config();

const connectDatabase = () =>{

   return mongoose.connect(process.env.MONGO_URI as string)
    .then(()=>console.log(`Database connected successfully`)).catch(error=>{
        console.log(`There was a problem connecting to the database`);
    });


}

export default connectDatabase;