// A travez de CarModel nosotros nos conectamos con la DB.
// Ejemplo -> CarModel.find() / CarModel.findOne()
// En pocas palabras db.cars.find() => CarModel.find()
const CarModel = require("../models/car.model");

// La logica de los controladores
const getCarsService = async (request, response) => {
  const allCars = await CarModel.find();

  if (!allCars) return { message: "No cars found", statusCode: 404 };

  return allCars;
};

const getCarByIdService = async (request, response) => {
  const { id } = request.params;

  const carById = await CarModel.findById(id);

  if (!carById) return { message: "Car not found", statusCode: 404 };

  return carById;
};

const addCarService = async (request, response) => {
  try {
    const car = request.body;

    // Convierte al objeto original en objeto mongo y lo prepara para la insercion
    const newCar = new CarModel(car);

    // Confirma la insercion y guarda el objeto en la coleccion
    await newCar.save();

    return { message: "Car added successfully", statusCode: 201 };
  } catch (error) {
    return { message: error.message, statusCode: 500 };
  }
};

const updateCarService = async (request, response) => {
  try {
    const { id } = request.params;
    const carToEdit = request.body;

    const carById = await CarModel.findById(id);

    if (!carById) return { message: "Car not found", statusCode: 404 };     

    carById.brand = carToEdit.brand;
    carById.model = carToEdit.model;
    carById.price = carToEdit.price;
    carById.year = carToEdit.year;
    carById.isNewCar = carToEdit.hasOwnProperty("isNewCar")
        ? carToEdit.isNewCar
        : carById.isNewCar;
    await carById.save();

    return { message: "Car updated successfully", statusCode: 200 };
  } catch (error) {
    return { message: error.message, statusCode: 500 };
  }
};

const deleteCarService = async (request, response) => {
    const {id} = request.params;

    try {
        const carToDelete = await CarModel.deleteOne({_id: id});

        if (!carToDelete) return { message: "Car not found", statusCode: 404 };
         
        if(carToDelete.deletedCount === 0) {
            return { message: "Car not found", statusCode: 404 };
        }

        return {message: 'Car deleted successfully'}
    } catch(error){
        return {message: error.message, statusCode: 500 }
    }
}

module.exports = {
  getCarsService,
  getCarByIdService,
  addCarService,
  updateCarService,
  deleteCarService
};
