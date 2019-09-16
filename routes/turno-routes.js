var express = require('express');
var turnoControlador = require('../controllers/turno-controller');


api.get('/obtener', turnoControlador.obtener);
api.post('/guardar', turnoControlador.guardar);
api.get('/actualizar', turnoControlador.actualizar);
api.get('/eliminar', turnoControlador.eliminar);

module.exports = api;