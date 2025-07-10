const {getPancitoService} = require('../services/cars.services')



// Defincion de las funciones que respoden
// -> la logica de dichas funciones -> service.js

const getPancitoController = (request, response) => {
    
    const pancito = getPancitoService(request)

    response.json(pancito)
}

module.exports = {
    getPancitoController
}



