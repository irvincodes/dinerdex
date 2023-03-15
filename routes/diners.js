var express = require("express");
var router = express.Router();
const dinersController = require("../controllers/dinersController");
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

// GET /diners (display all diners)
router.get("/", authorised, dinersController.index);
// GET /diners/new
router.get("/new", authorised, dinersController.new);
// POST /diners
router.post("/", dinersController.create);
// SHOW-GET /diners/:id
router.get("/:id", authorised, dinersController.show);
// DELETE /diners/:id/
router.delete("/:id", dinersController.delete);
// GET /diners/:id/edit
router.get("/:id/edit", authorised, dinersController.editEntry);
// PUT /diners/:id
router.put("/:id", dinersController.update);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
