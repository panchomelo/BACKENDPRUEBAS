const express = require('express');
const morgan = require('morgan');
const router = require("../routes/user.routes.js"); //importando router


const app = express();

app.use(morgan('dev')); //visualizacion de peticiones API
app.use(express.json()); //comprension de JSON
app.use(express.urlencoded({extended: true})); //Decodificacion de URL

app.use("/api/v1", router); //esta es la ruta raíz de mi puerto

app.use("*", (req, res) => { res.status(404).send("ruta no encontrada")});


module.exports = app; //exportando app



