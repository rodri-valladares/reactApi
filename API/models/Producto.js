const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    id: {
        type: String,
        trim: true,
    },
    titulo: {
        type: String,
        trim: true
    },
    imagen: {
        type: String,
    trim: true
    },
    precio: {
        type: Number,
        trim: true
    },
    stock: {
        type: Number,
        trim: true
    },
    condicion: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Producto', productosSchema);