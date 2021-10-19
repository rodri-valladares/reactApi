const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// crear el servidor
const app = express();

app.use(cors());

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/react-api', {
    useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useFindAndModify: false
});

// habilitar el body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// habilitar routing
app.use('/', routes());

// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})