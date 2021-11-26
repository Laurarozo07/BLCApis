const Clientes = require('../Models/clientes.js');
const clientesController = {};

clientesController.listar = async(req, res) => {
    const clientes = await Clientes.find();
    res.json(clientes);
};

clientesController.listarId = async(req, res) => {
    const clientes = await Clientes.findById(req.params.id);
    res.json(clientes);
};

clientesController.guardar = async(req, res) => {
    const clientes = new Clientes(req.body);
    await clientes.save();
    res.json({ 'Status': '200 Cliente guardado' });
};

clientesController.actualizar = async(req, res) => {
    const { id } = req.params;
    const clientes = { nombre_clientes: req.body.nombre_clientes, email_clientes: req.body.email_clientes, };
    await Clientes.findByIdAndUpdate(id, { $set: clientes }, { new: true });
    res.json({ 'Status': '200 Cliente Actualizado' });
};

clientesController.eliminar = async(req, res) => {
    const clientes = await Clientes.findByIdAndRemove(req.params.id);
    res.json({ 'Status': '200 Cliente Eliminado' });
}
module.exports = clientesController;