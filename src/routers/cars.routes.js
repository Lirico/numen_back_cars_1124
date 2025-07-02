const express = require('express')
// Configuracion del router
const carRouter = express.Router()
const {getPancitoController} = require('../controllers/cars.controllers')

console.log(carRouter)

// Definicion de las rutas
carRouter.get('/', getPancitoController)

// funciones que responden -> controller.js



module.exports = carRouter;