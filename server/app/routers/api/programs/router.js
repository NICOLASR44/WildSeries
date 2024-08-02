const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
const { browse } = require("../../../controllers/programActions");

router.get("/", browse);

/* ************************************************************************* */

/* ************************************************************************* */

module.exports = router;
