const Ventas = require('../Models/ventas.js');
const ventasController = {};

// trae el numero de documentos que existen en la base de datos 
ventasController.traerNumeroV = async(req, res) => {
    const ventas = await Ventas.find({}).count()
    res.json(ventas);
}
ventasController.listar = async(req, res) => {
    const ventas = await Ventas.find();
    res.json(ventas);
};

ventasController.listarId = async(req, res) => {
    const ventas = await Ventas.findById(req.params.id);
    res.json(ventas);
};

ventasController.guardar = async(req, res) => {
    const ventas = new Ventas(req.body);
    await ventas.save();
    res.json({ 'Status': '200 venta guardado' });
};

ventasController.actualizar = async(req, res) => {
    const { id } = req.params;
    const ventas = {
        codigo_venta: req.body.codigo_venta,
        // nombre_proveedor: req.body.nombre_proveedor,
        cedula_cliente: req.body.cedula_cliente,
        nombre_cliente: req.body.nombre_cliente,
        cedula_cliente: req.body.cedula_cliente,
        direccion_cliente: req.body.direccion_cliente,
        telefono_cliente: req.body.telefono_cliente,

        valorTotal_venta: req.body.valorTotal_venta,
        valor_iva: req.body.valor_iva,
        valorTotal_masIva: req.body.valorTotal_masIva,
        detalle_veta: req.body.detalle_veta,
        fecha_hora: req.body.fecha_hora,
        tipo_de_venta: req.body.tipo_de_venta,
        sucursal: req.body.sucursal

    };
    await Ventas.findByIdAndUpdate(id, { $set: ventas }, { new: true });
    res.json({ 'Status': '200 Ventas Actualizado' });
};

ventasController.eliminar = async(req, res) => {
    const ventas = await Ventas.findByIdAndRemove(req.params.id);
    res.json({ 'Status': '200 Ventas Eliminado' });
}
module.exports = ventasController;