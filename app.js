const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
db.authenticate()
    .then(() => console.log("La Base de Dtos esta conectado"))
    .catch( error => console.log(error));

// var usuario_ruta = require('./routes/usuario-routes');
var usuario_ruta = require('./routes/turno-routes');
var cargo_ruta = require('./routes/cargo-routes');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, resp) => resp.send('test'));
app.use('/api', usuario_ruta);
app.use('/apicargo', cargo_ruta);

const PORT = process.env.PORT || 3037;
app.listen(PORT,console.log('server inisiado'));
