// require('dotenv').config({path: './env'});
// import {DB_NAME} from "./constants.js"


import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./config.env"
}) 


connectDB()
.then(() => {
    console.log("Database connected")
    app.listen(process.env.PORT || 8000 , () => {    
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})

.catch((error) => {
    console.error("Error: ", error)
    throw error
}
)


























// import express from "express";
// const app =express()

// ( async() =>{
//     try {
//          await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log("Error: ", err)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         }
//         )
//     }catch (error){
//         console.error("Error: ", error)
//         throw error
//     }
// })()