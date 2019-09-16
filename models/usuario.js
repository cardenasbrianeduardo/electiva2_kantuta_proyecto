    
var Sequilize = require('sequelize') ;
var db = require('../config/database');

var Usuario = db.define('Usuario', {
    Usuario: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nombre: { type: Sequilize.STRING},
    NombreUsuario: {type: Sequilize.STRING},
    Correo: { type: Sequilize.STRING},
    Contrasenia: { type: Sequilize.STRING},
    Rol: { type: Sequilize.STRING},
    Imagen: { type: Sequilize.STRING}

},{
    freezeTableName: true,
    timestamps: false
});

module.exports = Usuario;
