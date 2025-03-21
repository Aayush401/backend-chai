import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./config.env"
});

const app = express(); // Define the app here

connectDB()
    .then(() => {
        console.log("Database connected");
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.error("Error: ", error);
        throw error;
    });
