var Sequilize = require('sequelize') ;
var db = require('../config/database');

var Turno = db.define('turno', {
    idTurno: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequilize.STRING
    }
},
{
    // freezeTableName, para que tome el nombre de las tablas de m
    // modo SINGULAR
    freezeTableName: true,
    timestamps: false
    
});
module.exports = Turno;
