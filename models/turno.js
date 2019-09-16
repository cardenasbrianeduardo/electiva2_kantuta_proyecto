    
var Sequilize = require('sequelize') ;
var db = require('../config/database');

var Turno = db.define('Turno', {
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
    freezeTableName: true,
    timestamps: false
    
});
module.exports = Turno;
