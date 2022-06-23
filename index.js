const express = require('express');
const cors = require('cors');
const paletaRoutes = require('./src/routes/paletas.routes');

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/paletas', paletaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
