const express = require('express');
const router = express.Router();
const consolidacionctrl = require('../controllers/controllerConsolidacion');
router.get('/listar', consolidacionctrl.listar);
router.post('/guardar', consolidacionctrl.guardar);
module.exports = router;