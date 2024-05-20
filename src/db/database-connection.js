const { MongoClient } = require("mongodb");

// Preparamos as informações de acesso ao banco de Dados
const dbUrl = process.env.DATABASE_URL;
const dbname = "mongodb-arquitetura-mvc";

async function connectToDatabase() {
  // Realizamos a conexão com o banco de dados
  const client = new MongoClient(dbUrl);
  console.log("Conectando ao banco de dados...");
  await client.connect();
  console.log("Banco de dados conectado com sucesso!");

  const db = client.db(dbname);

  // FIXME: usar o db de alguma forma
}

module.exports = {
  connectToDatabase,
};
