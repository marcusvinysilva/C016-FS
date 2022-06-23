const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

const findAllPaletas = () => paletas;

const findPaletaById = (id) => {
  const paletaById = paletas.map((paleta) => {
    if (paleta.id === id) {
      return paleta;
    }
  });
  console.log(paletaById);
  return paletaById[0];
};

const createPaleta = (paleta) => {
  paletas.push(paleta);
  return paletas;
};

const updatePaleta = (id, updatedPaleta) => {
  paletas.forEach((paleta) => {
    if (paleta.id === id) {
      paleta = updatedPaleta;
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
  updatePaleta
};
