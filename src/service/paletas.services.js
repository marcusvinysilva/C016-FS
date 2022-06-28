const e = require('cors');
const { v4: uuidv4 } = require('uuid');

const paletas = [
  {
    id: '3',
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: '2',
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: '1',
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

// DRY = Dont Repeat Yourself;
// KISS = Keep It Simple and Stupid;

const findAllPaletas = () => paletas;

const findPaletaById = (id) => {
  let indice = 0;
  const paletaById = paletas.map((paleta, index) => {
    if (paleta.id === id) {
      indice = index;
      return paleta;
    }
  });
  return paletaById[indice];
};

const createPaleta = (paleta) => {
  paleta.id = uuidv4();
  paletas.push(paleta);
  return paletas;
};

const updatePaleta = (id, updatedPaleta) => {
  console.log(updatedPaleta);
  let validPaletaId = false;
  paletas.forEach((paleta, index) => {
    if (paleta.id === id) {
      validPaletaId = true;
      if (updatedPaleta.sabor) {
        paletas[index].sabor = updatedPaleta.sabor;
      }

      if (updatedPaleta.descricao) {
        paletas[index].descricao = updatedPaleta.descricao;
      }

      paletas[index].foto = updatedPaleta.foto
        ? updatedPaleta.foto
        : paletas[index].foto;

      paletas[index].preco = updatedPaleta.preco
        ? updatedPaleta.preco
        : paletas[index].preco;
    }
  });
  if (validPaletaId) {
    return paletas;
  } else {
    throw new Error('Nenhuma paleta foi encontrada');
  }
};

const deletePaleta = (id) => {
  paletas.forEach((paleta, index) => {
    if (paleta.id === id) {
      paletas.splice(index, 1);
    }
  });
};

const initialService = () => {
  return 'hello world';
};

module.exports = {
  initialService,
  findAllPaletas,
  findPaletaById,
  createPaleta,
  deletePaleta,
  updatePaleta,
};
