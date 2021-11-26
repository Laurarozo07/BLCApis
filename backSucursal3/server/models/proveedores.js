const mongoose = require("mongoose");
const { Schema } = mongoose;

const proveedorSchema = new Schema({
    codigo_proveedor: { type: String, required: true },
    nombre_proveedor: { type: String, required: true },
    email_proveedor: { type: String, required: true },
    nit_proveedor: { type: String, required: true },
    telefono_proveedor: { type: String, required: true }
})

module.exports = mongoose.model("proveedores", proveedorSchema) 