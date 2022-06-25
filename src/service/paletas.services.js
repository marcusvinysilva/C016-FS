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
  paletas.forEach((paleta, index) => {
    if (paleta.id === id) {
      updatedPaleta.id = id;
      paletas[index] = updatedPaleta;
    }
  });

  return paletas;
};

const deletePaleta = (id) => {
  paletas.forEach((paleta, index) => {
    if (paleta.id === id) {
      paletas.splice(index, 1);
    }
  });
  numberOfObjects--;
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
