const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController.js");

// GET to /diners/:id/reviews
router.get("/diners/:id/reviews", reviewsController.index);
// GET, ADD REVIEW to /diners/:id/reviews/new
router.get("/diners/:id/reviews/new", reviewsController.new);
// POST to /diners/:id/reviews
router.post("/diners/:id/reviews", reviewsController.create);

module.exports = router;
