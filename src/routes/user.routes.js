const express = require('express')
const router = express.Router();
const listarUsuarios = require("../controllers/getAllUser.js")
const crearUsuario = require("../controllers/postCreateUser.js")
const actualizarUsuario = require("../controllers/putActualizarUser.js")
const login = require("../controllers/postLogin");
const eliminarUsuario = require('../controllers/deleteUser.js');

//listar
router.get("/", listarUsuarios);

//crear
router.post("/crear-usuario", crearUsuario);

//loguear
router.post("/login", login);

//actualizar
router.put("/actualizar-usuario", actualizarUsuario);

//eliminar
router.delete("/eliminar-usuario", eliminarUsuario);

module.exports = router; 