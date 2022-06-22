import express from 'express';
import cors from 'cors';
import batata, { multiplicacao } from './teste.js';

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`A soma é: `, batata(3, 6));
  console.log(multiplicacao(3, 6));
});
