const express = require("express");
const router = express.Router();

// Importando middlewares
const { verifyToken } = require("../middlewares/verifyToken");
// Importando controladores
const TutorCtrl = require("../controllers/tutor.controller");

// Ruta para crear el perfil del tutor
router.post("/:id", TutorCtrl.createTutor);
// Ruta para buscar perfil de tutor
router.get("/view/:id", TutorCtrl.viewTutor);
// Ruta para listar todos los tutores
router.get("/", TutorCtrl.listTutors);

module.exports = router;
