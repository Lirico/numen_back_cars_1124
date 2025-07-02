const express = require('express')
const carRouter = require('../routers/cars.routes')

// La config del server
const app = express();




// Ejecucion del router
app.use('/cars', carRouter)
// -> config router -> router.js

module.exports = app;