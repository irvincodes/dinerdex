var express = require("express");
var router = express.Router();
const dinersController = require("../controllers/dinersController");

// GET /diners (display all diners)
router.get("/", dinersController.index);
// GET /diners/new
router.get("/new", dinersController.new);
// POST /diners
router.post("/", dinersController.create);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
