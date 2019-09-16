var Turno = require('../models/turno');

function obtener(request, response){
    Turno.findAll().then(
        Turno => {
            response.json(turno);
        }
    );
    // response.status(200).send("OK");
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