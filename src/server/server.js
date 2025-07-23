const express = require('express')
const carRouter = require('../routers/cars.routes')

// La config del server
const app = express();


app.use(express.json())

// Ejecucion del router
app.use('/cars', carRouter)
// -> config router -> router.js

module.exports = app;