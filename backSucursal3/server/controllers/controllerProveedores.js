const Proveedores = require('../Models/proveedores.js');
const proveedoresController = {};

proveedoresController.listar = async(req, res) => {
    const proveedores = await Proveedores.find();
    res.json(proveedores);
};

proveedoresController.listarId = async(req, res) => {
    const proveedores = await Proveedores.findById(req.params.id);
    res.json(proveedores);
};

proveedoresController.guardar = async(req, res) => {
    const proveedores = new Proveedores(req.body);
    await proveedores.save();
    res.json({ 'Status': '200 Proveedores guardado' });
};

proveedoresController.actualizar = async(req, res) => {
    const { id } = req.params;
    const proveedores = {
        codigo_proveedor: req.body.codigo_proveedor,
        nombre_proveedor: req.body.nombre_proveedor,
        email_proveedor: req.body.email_proveedor,
        nit_proveedor: req.body.nit_proveedor,
        telefono_proveedor: req.body.telefono_proveedor
    };
    await Proveedores.findByIdAndUpdate(id, { $set: proveedores }, { new: true });
    res.json({ 'Status': '200 Proveedores Actualizado' });
};

proveedoresController.eliminar = async(req, res) => {
    const proveedores = await Proveedores.findByIdAndRemove(req.params.id);
    res.json({ 'Status': '200 Proveedores Eliminado' });
}
module.exports = proveedoresController;