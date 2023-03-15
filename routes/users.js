const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const User = require("../models/User");

// GET /login (display login page)
router.get("/login", usersController.index);
// GET /new
router.get("/new", usersController.new);
// POST /diners
router.post("/", usersController.create);
// POST /login
router.post("/login", usersController.login);
// GET /logout (display logout page)
router.get("/logout", usersController.logout);

module.exports = router;
