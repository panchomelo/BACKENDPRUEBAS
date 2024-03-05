const User = require("../models/user.model.js")

const listarUsuarios = async (req, res) => { //funcion asincrona

    const usuarios = await User.find({}); //espera a que encuentre a los usuarios en la base de datos

    res.status(200).json({ //se envía un Json al cliente
        code: 200,
        msg: "lista de usuarios",
        data: usuarios //aqui va la lista de usuarios
    })
}
    
module.exports = listarUsuarios;