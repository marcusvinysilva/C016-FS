const express = require('express');
const paletasController = require('../controllers/paletas.controllers');
const router = express.Router();

router.get('/', paletasController.initialController);
router.get('/all-paletas', paletasController.findAllPaletas);
router.get('/paleta-by-id/:id', paletasController.findPaletaById);
router.post('/create-paleta', paletasController.createPaleta);
router.put('/update-paleta/:id', paletasController.updatePaleta);
router.delete('/delete-paleta/:id', paletasController.deletePaleta);

module.exports = router;
