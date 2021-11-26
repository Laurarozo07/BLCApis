const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientesSchema = new Schema({
    cedula_clientes: { type: String, required: true },
    nombre_clientes: { type: String, required: true },
    direccion_clientes: { type: String, required: true },
    telefono_clientes: { type: String, required: true },
    email_clientes: { type: String, required: true }
    //usuario: {type: String, required:true},
    //password: {type: String, required:true}
})

module.exports = mongoose.model("clientes", clientesSchema)