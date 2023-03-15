const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const User = require("../models/User");

// GET /login (display login page)
router.get("/login", usersController.index);

module.exports = router;
