const express = require("express");
// Configuracion del router
const carRouter = express.Router();
const {
  getCarsController,
  getCarByIdController,
  addCarController,
  updateCarController,
  deleteCarController,
} = require("../controllers/cars.controllers");
const checkCarTypes = require("../utils/checkCarTypes");

// Definicion de las rutas
carRouter.get("/", getCarsController);
carRouter.get("/:id", getCarByIdController);
carRouter.post("/", checkCarTypes, addCarController);
carRouter.put("/:id", checkCarTypes,updateCarController);
carRouter.delete("/:id", deleteCarController);

// funciones que responden -> controller.js

module.exports = carRouter;
