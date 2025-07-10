require("dotenv").config();
const mongoose = require("mongoose");

// Configuracion para conectarnos con la base de datos de Mongo

const DATABASE_URL = process.env.DATABASE_URL || "Base de datos caida";

// IIFE -> Immediately Invoked Function Expression
// Funcion anonima autoejecutable
(
    async () => {
        try {
            await mongoose.connect(DATABASE_URL);
            console.log("Base de datos conectada :)");
        } catch (error) {
            console.log(error);
        }
    }
)();



