const express = require('express')
const router = express.Router();
const listarUsuarios = require("../controllers/getAllUser.js")
const crearUsuario = require("../controllers/postCreateUser.js")


//listar
router.get("/", listarUsuarios);

//crear
router.post("/crear-usuario", crearUsuario);

//loguear
router.post("/login", (req, res) => {
    res.send("ruta POST ok");
    }); 

//actualizar
router.put("/actualizar-usuario", (req, res) => {
    res.send("ruta PUT ok");
    }); 

//eliminar
router.delete("/eliminar-usuario", (req, res) => {
    res.send("ruta DELETE ok");
    }); 

module.exports = router;