const Producto = require('../models/Producto');

exports.nuevoProducto = async (req, res, next )  => {
    
    const productos = new Producto(req.body);
    
    try {
        await productos.save();
        res.json({ mensaje : 'El producto se agregó correctamente'}); 
        res.json( productos); 
    } catch (error) {
        console.log(error);
        next();
    }
    
}

exports.obtenerProducto = async (req, res, next) => {
    try {
        const productos = await Producto.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}