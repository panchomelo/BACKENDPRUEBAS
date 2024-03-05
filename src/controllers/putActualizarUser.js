const User = require("../models/user.model.js")

const actualizarUsuario = async (req, res) => {
    const { id } = req.params; //tomamos el ID para buscarlo en mongoDb
    const { name, lastName } = req.body; //recibimos por el body los datos que vamos a actualizar

    if (!id) {
        return res.status(400).json({ //el return hace que el codigo se detenga si no hay ID
            msg: "no se ha proporcionado un ID",
            code: 400,
        })
    }

    if (id.length !== 24) {
        return res.status(400).json({ //el return hace que el codigo se detenga si el largo del ID es distinto a 24
            msg: "el ID proporcionado no es valido",
            code: 400,
        })
    }

    if (!name || !lastName) {
        return res.status(400).json({
            msg: "Debes enviar datos para actualizar",
            code: 400,
        })
    }

    const userChanges = { //aqui van los cambios que recibimos por el body
        name: name,
        lastName: lastName,
    }

    try {
        await User.findByIdAndUpdate(id, userChanges) //busca al usuario en mongoDB por su ID

        res.status(200).json({ //se envía un Json al cliente
            msg: "Usuario actualizado con exito",
            code: 200,
        });
    } catch (error) {
        console.log(error);
    };
};

module.exports = actualizarUsuario;