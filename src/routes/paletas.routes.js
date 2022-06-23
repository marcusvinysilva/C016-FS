const express = require('express');
const paletasController = require('../controllers/paletas.controllers');
const router = express.Router();

router.get('/', paletasController.initialController);
router.get('/allPaletas', paletasController.findAllPaletas);
router.get('/paletaById/:id', paletasController.findPaletaById);
router.post('/createPaleta', paletasController.createPaleta);
router.put('/updatePaleta/:id', paletasController.updatePaleta);
router.delete('/deletePaleta/:id', paletasController.deletePaleta);

module.exports = router;
