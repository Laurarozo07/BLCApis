const express = require('express');
const router = express.Router();
const productosctrl = require('../controllers/controllerProductos');
router.get('/listar', productosctrl.listar);
router.post('/guardar', productosctrl.guardar);
router.get('/listar/:id', productosctrl.listarId);
router.put('/actualizar/:id', productosctrl.actualizar);
router.delete('/eliminar/:id', productosctrl.eliminar);
module.exports = router;