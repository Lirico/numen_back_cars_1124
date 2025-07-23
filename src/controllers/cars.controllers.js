const {getCarsService,getCarByIdService, addCarService, updateCarService, deleteCarService} = require('../services/cars.services')



// Defincion de las funciones que respoden
// -> la logica de dichas funciones -> service.js

const getCarsController = async (request, response) => {
    
    const allCars = await getCarsService(request) // allCars

    response.json(allCars)
}

const getCarByIdController = async (request, response) => {
    const carById = await getCarByIdService(request)

    response.json(carById)
}

const addCarController = async (request, response) => {
    const addCar = await addCarService(request)

    response.json(addCar)
}

const updateCarController = async (request, response) => {
    const updateCar = await updateCarService(request)

    response.json(updateCar)
}

const deleteCarController = async (request, response) => {
    const deleteCar = await deleteCarService(request)

    response.json(deleteCar)
}

module.exports = {
    getCarsController,
    getCarByIdController,
    addCarController,
    updateCarController,
    deleteCarController
}



