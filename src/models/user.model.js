const mongoose = require('mongoose');

//esquema
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    password: String
}) 

//modelo
const User = mongoose.model("user", userSchema);

module.exports = User;
