const express = require('express')
const router = express.Router();


//listar
router.get("/", listarUsuarios);

//crear
router.post("/crear-usuario", (req, res) => {
    res.send("ruta POST ok");
    }); 

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