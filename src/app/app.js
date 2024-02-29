const express = require('express');
const morgan = require('morgan');
const router = require("../routes/user.routes.js");


const app = express();

app.use(morgan('dev'));
app.use("/api/v1", router); //esta es la ruta raíz de mi puerto


module.exports = app; //exportando app



