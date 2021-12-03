const Consolidacion = require('../models/consolidacion.js');
const consolidacionController = {};

consolidacionController.listar = async(req, res) => {
    const consolidacion = await Consolidacion.find();
    res.json(consolidacion);
};

    consolidacionController.guardar = async(req, res) => {
        const consolidacion = new Consolidacion(req.body);
        await consolidacion.save();
        res.json({ 'Status': '200 consolidacion guardado' });
};

module.exports = consolidacionController;