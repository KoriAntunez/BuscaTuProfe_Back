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

// Método para listar los servicios por tutor
const listServicesByTutor = async (req, res) => {
    // Obtenemos todos los servicios del tutor registrados
    const services = await Service.find({ tutor_id: req.params.id });

    res.status(200).json({
        services,
        msg: "Servicios cargados exitosamente."
    });
};

module.exports = {
    listServices,
    listServicesByTutor
}