function readAll(req, res) {
    res.send('Read All')
}

function readById(req, res) {
    res.send('Read By Id')
}

function create(re, res) {
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
