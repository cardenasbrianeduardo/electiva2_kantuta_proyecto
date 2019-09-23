var Cargo = require('../models/cargo');

function get(request, response){
    Cargo.findAll().then(valor => {
        response.json(valor)
    });
}

module.exports = {get};