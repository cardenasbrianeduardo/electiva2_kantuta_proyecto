var express = require('express');
var usuarioControlador = require('../controllers/usuario-controller');

var api = express();
api.get('/obtener', usuarioControlador.get);
api.post('/guardar', usuarioControlador.guardar);
api.get('/actualizar', usuarioControlador.actualizar);
api.get('/eliminar', usuarioControlador.eliminar);

module.exports = api;