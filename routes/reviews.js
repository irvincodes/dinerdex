const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController.js");
const User = require("../models/User");

const authorised = async (req, res, next) => {
  if (req.session.userId) {
    const user = await User.findById(req.session.userId).exec();
    res.locals.user = user;
    next();
  } else {
    res.status(403).send(req.session);
  }
};

// GET to /diners/:id/reviews
router.get("/diners/:id/reviews", authorised, reviewsController.index);
// GET, ADD REVIEW to /diners/:id/reviews/new
router.get("/diners/:id/reviews/new", authorised, reviewsController.new);
// POST to /diners/:id/reviews
router.post("/diners/:id/reviews", reviewsController.create);

module.exports = router;
