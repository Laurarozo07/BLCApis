const mongoose = require("mongoose");
const { Schema } = mongoose;

const productosSchema = new Schema({
    codigo_producto: { type: String, required: true },
    nombre_producto: { type: String, required: true },
    nit_proveedor: { type: String, required: true },
    precio_compra: { type: Number, required: true },
    iva_compra: { type: Number, required: true },
    precio_venta: { type: Number, required: true },
    imagen_url: { type: String, required: true }

})

module.exports = mongoose.model("productos", productosSchema)