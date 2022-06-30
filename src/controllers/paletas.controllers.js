const paletasService = require('../service/paletas.services');
const validationService = require('../service/validation.services');
const mongoose = require('mongoose');

const initialController = (req, res) => {
  console.log(req.headers['user-agent']);
  if (req.headers['user-agent'].slice(0, 7) == 'Thunder') {
    res.send('Thunder client não esta autorizado');
  }
  const response = paletasService.initialService();
  res.send(response);
};

const findAllPaletas = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletas();

  if (allPaletas.length == 0) {
    return res
      .status(206)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }

  res.send(allPaletas);
};

const findPaletaById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const response = await paletasService.findPaletaById(id);
  
  if (!response) {
    res.status(206).send({ message: 'Nenhuma paleta encontrada' });
  } else {
    res
      .status(200)
      .send({ message: 'Paleta encontrada com sucesso', data: response });
  }
};

const createPaleta = async (req, res) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
    });
  }

  const newPaleta = await paletasService.createPaleta(paleta);

  res.send(newPaleta);
};

const updatePaleta = async (req, res) => {
  const id = req.params.id;
  const paletaEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenPaleta = await paletasService.findPaletaById(id);

  if (!chosenPaleta) {
    return res.status(206).send({ message: 'Paleta não encontrada!' });
  }

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a paleta!',
    });
  }

  const updatedPaleta = await paletasService.updatePaleta(id, paletaEdit);

  res.send(updatedPaleta);
};

const deletePaleta = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenPaleta = await paletasService.findPaletaById(id);

  if (!chosenPaleta) {
    return res.status(206).send({ message: 'Paleta não encontrada!' });
  }

  await paletasService.deletePaleta(id);

  res.status(204).send();
};

module.exports = {
  initialController,
  findAllPaletas,
  findPaletaById,
  createPaleta,
  updatePaleta,
  deletePaleta,
};
