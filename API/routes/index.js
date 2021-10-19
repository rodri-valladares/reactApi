const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers');

module.exports = function() {
    // Agrega nuevos pacientes via POST
    router.post('/api', 
        productoController.nuevoProducto
    );

    // Obtiene todos los registros de pacientes en la BD
    router.get('/api',
       productoController.obtenerProducto
    );
    // Obtiene un paciente en especifico (ID)
    //router.get('/api/:id',
    //    productoController.obtenerPaciente
    //)

    // Actualizar un registro con un ID especifico
    //router.put('/api/:id',
    //    productoController.actualizarPaciente
    //);

    // Elimina un paciente por su ID
    //router.delete('/api/:id',
    //    productoController.eliminarPaciente
    //);

    return router;
}