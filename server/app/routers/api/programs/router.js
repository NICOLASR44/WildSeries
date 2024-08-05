const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
const { browse, read } = require("../../../controllers/programActions");

router.get("/", browse);
router.get("/:id", read);
/* ************************************************************************* */

/* ************************************************************************* */

module.exports = router;
