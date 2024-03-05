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
const User = mongoose.model("user", userSchema); //aquí el user hace referencia al mongoDB, va en singular pero en mongo va en plural

module.exports = User;
