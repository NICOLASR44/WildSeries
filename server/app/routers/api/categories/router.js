const express = require("express");

const router = express.Router();
const { browse, read } = require("../../../controllers/categoryActions");

router.get("/", browse); // Route pour afficher toutes les catégories
router.get("/:id", read); // Route pour afficher une catégorie spécifique par son ID

module.exports = router;
