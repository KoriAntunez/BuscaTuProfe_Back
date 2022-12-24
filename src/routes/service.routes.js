const express = require("express");
const router = express.Router();

// Importando middlewares
const { uploadImage } = require("../middlewares/uploadImage");
const { verifyToken } = require("../middlewares/verifyToken");
// Importando controladores
const ServiceCtrl = require("../controllers/service.controller");

// Ruta para listar todos los servicios
router.get("/", ServiceCtrl.listServices);

// Ruta para listar los servicios por tutor
router.get("/:id", ServiceCtrl.listServicesByTutor);

// Ruta para crear un servicio
router.post("/:id", ServiceCtrl.createService);

// Ruta para subir la imagen del servicio
router.put("/:id", uploadImage, ServiceCtrl.uploadPhoto);

module.exports = router;
