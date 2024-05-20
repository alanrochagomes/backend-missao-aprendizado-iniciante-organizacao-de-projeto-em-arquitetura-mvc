const { getDatabase } = require("../db/database-connection");

function getCollection() {
  return getDatabase().collection('personagem')
}

function readAll() {
  // Acessamos a lista de personagens na collection do MongoDB
 return getCollection().find().toArray()
}

function readById() {
}

function create() {
}

function updateById() {
}

function deleteById() {
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};

