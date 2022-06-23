const paletasService = require('../service/paletas.services');

const initialController = (req, res) => {
  console.log(req.headers['user-agent']);
  if (req.headers['user-agent'].slice(0, 7) == 'Thunder') {
    res.send('Thunder client não esta autorizado');
  }
  const response = paletasService.initialService();
  res.send(response);
};

const findAllPaletas = (req, res) => {
  res.send(paletasService.findAllPaletas());
};

const findPaletaById = (req, res) => {
  const id = parseInt(req.params.id);
  const response = paletasService.findPaletaById(id);
  if (response === undefined) {
    res.status(204).send({ message: 'Nenhuma paleta encontrada' });
  } else {
    res.send({ message: 'Paleta encontrada com sucesso', response });
  }
};

const createPaleta = (req, res) => {
  const paleta = req.body;
  const response = paletasService.createPaleta(paleta);
  res.send(response);
};

const updatePaleta = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPaleta = req.body;
  res.send(paletasService.updatePaleta(id, updatedPaleta));
};

const deletePaleta = (req, res) => {
  const id = parseInt(req.params.id);
  const response = paletasService.deletePaleta(id);
  res.send(response);
};

// use the imagination
// function checkouPurchase(req, res) {
//   const user = user.service.findById(2342);
//   if (user != null) {
//     const authorization = auth.service.verification(user.card);
//     if (authorization) {
//       checkout.service.purchase(user, card);
//       res.send('sucesso');
//     } else {
//       res.send('not authorized');
//     }
//   } else {
//     res.sen('user not found');
//   }
// }

module.exports = {
  initialController,
  findAllPaletas,
  findPaletaById,
  createPaleta,
  updatePaleta,
  deletePaleta,
};
