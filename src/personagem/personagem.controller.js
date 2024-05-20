const service = require('./personagem.service')

async function readAll(req, res) {
    // Acessamos a lista de personagens no service
    const items = await service.readAll()
    
    // Enviamos a lista de personagens como resultado
    res.send(items)
}

function readById(req, res) {
    res.send('Read By Id')
}

function create(req, res) {
    res.send('Create')
}

function updateById(req, res) {
    res.send('Update By Id')
}

function deleteById(req, res) {
    res.send('Delete By Id')
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById 
}
