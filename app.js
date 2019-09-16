const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
db.authenticate()
    .then(() => console.log("La Base de Dtos esta conectado"))
    .catch( error => console.log(error));

var usuario_ruta = require('./routes/usuario-routes');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/', (req, resp) => resp.send('test'));
app.use('/api', usuario_ruta);
const PORT = process.env.PORT || 3030;
app.listen(PORT,console.log('server inisiado'));
