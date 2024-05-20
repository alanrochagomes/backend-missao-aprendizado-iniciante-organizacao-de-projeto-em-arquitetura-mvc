require('dotenv').config()
const express = require('express');
const { connectToDatabase } = require('./db/database-connection');
const personagemRouter = require('./personagem/personagem.router')
// const { MongoClient, ObjectId } = require("mongodb");

// Declaramos a função main()
async function main() {
  await connectToDatabase()

  // const collection = db.collection("personagem")

  const app = express();

  // Middlewares
  // Sinalizo para o Express que estamos usando JSON no Body
  app.use(express.json());

  app.get('/', function (req, res) {
    res.send('Hello World');
  });

  app.use('/personagem', personagemRouter)

  // FIX: mover isso para a pasta `personagem`
  /*
  // Endpoint Update [PUT] /personagem/:id
  app.put("/personagem/:id", async function (req, res) {
    // Acessamos o ID dos parâmetros de rota
    const id = req.params.id;

    // Checamos se o item do ID -1 está na lista, exibindo
    // uma mensagem caso não esteja
    // if (!lista[id - 1]) {
    // return res.status(404).send("Item não encontrado.");
    // }

    // Acessamos o Body da requsição
    const novoItem = req.body;

    // Checar se o `nome` está presente no body
    if (!novoItem || !novoItem.nome) {
      return res.status(400).send("Corpo da requisição deve conter a propriedade `nome`.");
    }

    // Checa se o novoItem está na lista ou não
    // if (lista.includes(novoItem)) {
    // return res.status(409).send("Item já existe na lista.");
    // }

    // Atualizamos na collection o novoItem pelo ID
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: novoItem }
    )

    // Enviamos uma mensagem de sucesso
    res.send(novoItem);
  });

  // Endpoint Delete [DELETE] /personagem/:id
  app.delete("/personagem/:id", function (req, res) {
    // Acessamos o parâmetro de rota
    const id = req.params.id;

    // Checamos se o item do ID -1 está na lista, exibindo
    // uma mensagem caso não esteja
    // if (!lista[id - 1]) {
    //   return res.status(404).send("Item não encontrado.");
    // }

    // Remover o item da collection usando o ID
    collection.deleteOne({ _id: new ObjectId(id) })
    
    // Enviamos uma mensagem de sucesso
    res.send("Item removido com sucesso: " + id);
  });
  */

  app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000')
  });
}

// Executamos a função main()
main();
