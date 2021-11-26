const express = require('express');
const router = express.Router();
const clientesctrl = require('../controllers/controllerClientes');
router.get('/listar', clientesctrl.listar);
router.post('/guardar', clientesctrl.guardar);
router.get('/listar/:id', clientesctrl.listarId);
router.put('/actualizar/:id', clientesctrl.actualizar);
router.delete('/eliminar/:id', clientesctrl.eliminar);
module.exports = router;