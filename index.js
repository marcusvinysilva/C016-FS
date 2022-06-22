const express = require('express');
const cors = require('cors');
// import express from 'express';
const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
