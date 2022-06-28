const mongoose = require('mongoose');
const { Schema } = mongoose;

const paletaSchema = new Schema({
  sabor: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
  createdDate: { type: Date, default: Date.now() },
});

const Paleta = mongoose.model('Paleta', paletaSchema);

module.exports = Paleta;
