const mongoose = require("mongoose");
const { Schema } = mongoose;

const ventasSchema = new Schema({
    codigo_venta: { type: String, required: true },
    // nombre_proveedor: { type: String, required: true },
    nombre_cliente: { type: String, required: true },
    cedula_cliente: { type: String, required: true },
    direccion_cliente: { type: String, required: true },
    telefono_cliente: { type: String, required: true },

    valorTotal_venta: { type: String, required: true },
    valor_iva: { type: String, required: true },
    valorTotal_masIva: { type: String, required: true },
    detalle_veta: { type: Array, required: true },
    fecha_hora: { type: Date, required: true },
    tipo_de_venta: { type: String, required: true },
    sucursal: { type: String, required: true }
})

module.exports = mongoose.model("ventas", ventasSchema)