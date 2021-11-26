const express = require('express');
const router = express.Router();
const proveedoresctrl = require('../controllers/controllerProveedores');
router.get('/listar', proveedoresctrl.listar);
router.post('/guardar', proveedoresctrl.guardar);
router.get('/listar/:id', proveedoresctrl.listarId);
router.put('/actualizar/:id', proveedoresctrl.actualizar);
router.delete('/eliminar/:id', proveedoresctrl.eliminar);
module.exports = router;