const User = require("../models/user.model.js")

const listarUsuarios = async (req, res) => {

    const usuarios = await User.find({});

    res.status(200).json({
        code: 200,
        msg: "lista de usuarios",
        data: usuarios
    })
}
    
module.exports = listarUsuarios;