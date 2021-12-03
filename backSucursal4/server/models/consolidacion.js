const mongoose = require("mongoose");
const { Schema } = mongoose;

const consolidacionSchema = new Schema({
    numero_venta: { type: String, required: true },
    ciudad: { type: String, required: true },
    fecha: { type: Date, required: true },
    total_ventas: { type: Number, required: true }
})

module.exports = mongoose.model("consolidacion", consolidacionSchema)