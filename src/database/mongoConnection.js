const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/';

function connectToDatabase() {
  console.log('rodou');
  mongoose
    .connect(
      'mongodb+srv://projetoC016fs:9JVOfZ1325WzR8tH@cluster0.ng0iz6x.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('MongoDb conectado com sucesso!!!'))
    .catch((error) =>
      console.log(`error ao conectar com MongoDb, erro: ${error}`),
    );
  console;
}

module.exports = connectToDatabase;
