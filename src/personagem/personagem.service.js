const { ObjectId } = require('mongodb');
const { getDatabase } = require('../db/database-connection');

function getCollection() {
  return getDatabase().collection('personagem')
}

function readAll() {
  // Acessamos a lista de personagens na collection do MongoDB
 return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  // retornar o item na collection usando o Id 
  return getCollection().findOne({ _id: new ObjectId(id) })

}

function create(newItem) {
  // Adicionamos na collection
  return getCollection().insertOne(newItem)
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

