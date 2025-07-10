// A travez de CarModel nosotros nos conectamos con la DB.
// Ejemplo -> CarModel.find() / CarModel.findOne()
// En pocas palabras db.cars.find() => CarModel.find()
const CarModel = require('../models/car.model');



// La logica de los controladores

const getPancitoService = (request, response) => {
   return "pancito"
}




module.exports = {
    getPancitoService
}