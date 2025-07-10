const app = require('./server/server')

// Ejecutar la funcion que conecta con la DB
// -> La logica de la funcion -> config.js (db)
require('./db/config');

// Leer puerto 
// -> La definicion del puerto -> .env
require('dotenv').config()

const PORT = process.env.PORT || 8080;

// La escucha del servidor a traves de tal puerto 
// -> config servidor -> server.js
app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`))
