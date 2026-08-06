import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express";
import connectDB from "./db/index.js";
import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config({
    path: "./env"
})

connectDB();
const app = express();































// ;(async ()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.error("Error connecting to MongoDB")
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error
//     }
// })()
