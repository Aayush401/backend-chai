import mongoose from "mongoose";
import {DB_NAME} from "./constants"

import express from "express";
const app =express()

( async() =>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
        app.on("error", (err) => {
            console.log("Error: ", err)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        }
        )
    }catch (error){
        console.error("Error: ", error)
        throw error
    }
})()