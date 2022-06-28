const paletasService = require('../service/paletas.services');
const validationService = require('../service/validation.services');

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
  const id = req.params.id;
  const response = paletasService.findPaletaById(id);
  if (response === undefined) {
    res.status(206).send({ message: 'Nenhuma paleta encontrada' });
  } else {
    res
      .status(200)
      .send({ message: 'Paleta encontrada com sucesso', data: response });
  }
};

const createPaleta = (req, res) => {
  const paleta = req.body;
  const validPaleta = validationService.validPaleta(paleta);
  if (validPaleta) {
    const response = paletasService.createPaleta(paleta);
    res
      .status(201)
      .send({ message: 'Paleta criada com sucesso', data: response });
  } else {
    res
      .status(400)
      .send({ message: 'Por favor preencha todos os campos da paleta' });
  }
};

const updatePaleta = (req, res) => {
  try {
    const id = req.params.id;
    const updatedPaleta = req.body;

    validationService.validUpdatePaleta(updatedPaleta);
    const response = paletasService.updatePaleta(id, updatedPaleta);
    if (response !== undefined) {
      res
        .status(200)
        .send({ message: 'Paleta Atualizada com sucesso', data: response });
    }
  } catch (err) {
    console.log(err.message);
    if (err.message == 'Nenhum dado para ser atualizado') {
      res.status(400).send({ message: 'Nenhum dado foi enviado' });
    } else if (err.message == 'Nenhuma paleta foi encontrada') {
      res
        .status(400)
        .send({ message: 'Nenhuma paleta com esse id foi encontrada' });
    }
  }
};

const deletePaleta = (req, res) => {
  const id = parseInt(req.params.id);
  const response = paletasService.deletePaleta(id);
  res.status(200).send(response);
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
