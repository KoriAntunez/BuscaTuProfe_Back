const express = require("express");
const router = express.Router();

// Importando middlewares
const { verifyToken } = require("../middlewares/verifyToken");
// Importando controladores
const TutorCtrl = require("../controllers/tutor.controller");

// Ruta para crear el perfil del tutor
router.post("/:id", TutorCtrl.createTutor);
<<<<<<< Updated upstream
// Ruta para buscar perfil de tutor
router.get("/view/:id", TutorCtrl.viewTutor);
=======
// Ruta para mostrar perfil de tutor
router.get("/views/:id", TutorCtrl.viewTutor);
>>>>>>> Stashed changes
// Ruta para listar todos los tutores
router.get("/", TutorCtrl.listTutors);

module.exports = router;
