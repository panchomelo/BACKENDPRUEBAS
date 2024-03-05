const User = require("../models/user.model.js")

const crearUsuario = async (req, res) => {

    const { name, lastName, email, password } = req.body; //valores que recibe desde un body

    await User.create({ //crea el usuario
        name: name,
        lastName: lastName,
        email: email,
        password: password,
    })

    res.status(201).json({ //se envía un Json al cliente
        msg: "Usuario creado con exito",
        code:201
    })
};

module.exports = crearUsuario;