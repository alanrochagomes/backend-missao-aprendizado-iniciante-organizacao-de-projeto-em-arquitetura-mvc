const service = require('./personagem.service')

async function readAll(req, res) {
    // Acessamos a lista de personagens no service
    const items = await service.readAll()
    
    // Enviamos a lista de personagens como resultado
    res.send(items)
}

async function readById(req, res) {
    // Acessamos o parâmetro de rota ID-
    const id = req.params.id;

    // Acessamos o personagem no service através do ID
    const item = await service.readById(id)

    // Checamos se o item obtido é existente
    if (!item) {
        return res.status(404).send("Item não encontrado.");
      }

    // Enviamos o item como resposta  
    res.send(item)
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
