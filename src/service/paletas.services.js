const Paleta = require('../models/Paleta');

const findAllPaletas = async () => {
  const allPaletas = await Paleta.find();
  return allPaletas;
};

const findPaletaById = async (id) => {
  const onePaleta = await Paleta.findById(id);
  return onePaleta;
};

const createPaleta = async (paleta) => {
  const createdPaleta = await Paleta.create(paleta);
  return createdPaleta;
};

const updatePaleta = async (id, updatedPaleta) => {
  const updatePaleta = await Paleta.findByIdAndUpdate(
    id,
    updatedPaleta,
  ).setOptions({ returnOriginal: false });
  return updatePaleta;
};

const deletePaleta = async (id) => {
  return await Paleta.findByIdAndDelete(id);
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
