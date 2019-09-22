var Turno = require('../models/turno');
// var bcrypt = require('bcrypt-nodejs');

function obtener(request, response){
    Turno.findAll().then(valor => {
        response.json(valor)
    });
}

function guardar(request, response){
    // console.log('Funsionando');
    response.status(200).send("OK");
}
function actualizar(request, response){
    // console.log('Funsionando');
    response.status(200).send("OK");
}
function eliminar(request, response){
    // console.log('Funsionando');
    response.status(200).send("OK");
}

module.exports = {obtener, guardar, actualizar, eliminar};