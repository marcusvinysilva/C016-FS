const express = require('express');
const cors = require('cors');
const paletaRoutes = require('./src/routes/paletas.routes');
const connectToDatabase = require('./src/database/mongoConnection');
const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

connectToDatabase();

app.use('/paletas', paletaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
