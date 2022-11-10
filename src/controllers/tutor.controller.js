const fs = require('fs-extra');

// Importando modelos
const Tutor = require('../models/tutor');

// Método para crear o actualizar el perfil del tutor
const createTutor = async (req, res) => {
    const {
        name,
        surname,
        country,
        city,
        biography,
        network
    } = req.body;

    // Buscamos al tutor y actualizamos sus datos si es que existe
    let tutor = await Tutor.findOneAndUpdate({ user_id: req.params.id }, { 
        name,
        surname,
        country,
        city,
        biography,
        network }, { new: true });
    let msgResp = "Perfil de tutor actualizado exitosamente.";

    // Si es que el tutor no existe
    if (!tutor) {
        const newTutor = new Tutor({
            name,
            surname,
            country,
            city,
            biography,
            network,
            user_id: req.params.id
        });
        // Guardamos el perfil del tutor en la BD
        tutor = await newTutor.save();
        msgResp = "Perfil de tutor creado exitosamente.";
    }

    res.status(200).json({
        tutor,
        msg: msgResp
    });
};


module.exports = {
    createTutor
}