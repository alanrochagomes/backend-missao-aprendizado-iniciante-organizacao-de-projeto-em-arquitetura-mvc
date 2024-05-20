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

/**
 * 
 * @param {string} id 
 * @returns 
 */
function updateById(id, newItem) {
  // Atualizamos na collection  o newItem pelo ID
  return getCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: newItem }
  )
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

