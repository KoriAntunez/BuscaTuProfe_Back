const fs = require('fs-extra');
const cloudinary = require('../config/cloudinary');

const Service = require('../models/service');

// Método para listar todos los servicios
const listServices = async (req, res) => {
    // Obtenemos todos los servicios registrados
    const services = await Service.find().populate("tutor_id");

    res.status(200).json({
        services,
        msg: "Servicios cargados exitosamente."
    });
};



module.exports = {
    listServices
}