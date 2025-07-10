const {mongoose, Schema} = require('mongoose');

// Definir el modelo del objeto mongo de tal coleccion de la DB

const CarSchema = Schema({
    brand: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true,
    },
    isNewCar: {
        type: Boolean,
        default: false
    }
})

const CarModel = mongoose.model("Car", CarSchema);

/* 
    Argumentos del metodo "model" de mongoose.

    1er Argumento:
        - Define el nombre de cada objeto de tal coleccion. El nombre siempre va en singular con 
        la primera letra en mayuscula. Una vez definido el nombre, mongo sabe que debe conectarse
        con una coleccion cuyo nombre es el plural en minuscula del nombre del objeto definido.
    2do Argumento:
        - Le pasamos el Schema del modelo que representa cada objeto de la coleccion.
*/

module.exports = CarModel;