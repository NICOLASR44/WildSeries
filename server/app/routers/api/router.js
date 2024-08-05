const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
// Define a route to respond with "Welcome" at the root URL
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */
const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

/* ************************************************************************* */

module.exports = router;
