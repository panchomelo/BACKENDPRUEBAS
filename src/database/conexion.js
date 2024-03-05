const mongoose = require('mongoose');

const dbConnection = async () => { //funcion asincrona
    try { //intenta
        await mongoose.connect('mongodb://localhost:27017/proyectoIntegrador'); //conectarse a base de datos local
        console.log("base de datos conectada");
    } catch (error) { //si hay un error capturalo, de esta manera la app sigue funcionando
        console.log(error);
    }
}

module.exports = dbConnection;