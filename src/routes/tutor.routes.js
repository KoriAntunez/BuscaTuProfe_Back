const express = require("express");
const router = express.Router();

// Importando middlewares
const { verifyToken } = require("../middlewares/verifyToken");
// Importando controladores
const TutorCtrl = require("../controllers/tutor.controller");

// Ruta para crear el perfil del tutor
router.post("/:id", verifyToken, TutorCtrl.createTutor);
// Ruta para mostrar perfil de tutor
router.get("/view/:id", TutorCtrl.viewTutor);

module.exports = router;
