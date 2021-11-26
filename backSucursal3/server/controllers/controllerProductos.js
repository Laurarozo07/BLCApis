const Productos = require('../Models/productos.js');
const productosController = {};

productosController.listar = async(req, res) => {
    const productos = await Productos.find();
    res.json(productos);
};

productosController.listarId = async(req, res) => {
    const productos = await Productos.findById(req.params.id);
    res.json(productos);
};

productosController.guardar = async(req, res) => {
    const productos = new Productos(req.body);
    await productos.save();
    res.json({ 'Status': '200 Productos guardado' });
};

productosController.actualizar = async(req, res) => {
    const { id } = req.params;
    const productos = {
        codigo_producto: req.body.codigo_producto,
        nombre_producto: req.body.nombre_producto,
        nit_proveedor: req.body.nit_proveedor,
        precio_compra: req.body.precio_compra,
        iva_compra: req.body.iva_compra,
        precio_venta: req.body.precio_venta,
        imagen_url: req.body.imagen_url
    };
    await Productos.findByIdAndUpdate(id, { $set: productos }, { new: true });
    res.json({ 'Status': '200 Productos Actualizado' });
};

productosController.eliminar = async(req, res) => {
    const productos = await Productos.findByIdAndRemove(req.params.id);
    res.json({ 'Status': '200 Productos Eliminado' });
}
module.exports = productosController;