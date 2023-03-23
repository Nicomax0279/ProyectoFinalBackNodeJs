import mongoose from "mongoose";
import { logger } from "../logs/logger.js";
import { options } from "./options.js";

export const connectDB = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(options.mongoDB,(error)=>{
        if(error) return logger.error(`Hubo un error al conectar la base de datos ${error}`);
        logger.info("conexion exitosa!")
    });
}