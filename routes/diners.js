var express = require("express");
var router = express.Router();
const dinersController = require("../controllers/dinersController");

// GET /diners (display all diners)
router.get("/", dinersController.index);
// GET /diners/new
router.get("/new", dinersController.new);
// POST /diners
router.post("/", dinersController.create);
// SHOW-GET /diners/:id
router.get("/:id", dinersController.show);
// DELETE /diners/:id/
router.delete("/:id", dinersController.delete);
// GET /diners/:id/edit
router.get("/:id/edit", dinersController.editEntry);
// PUT /diners/:id
router.put("/:id", dinersController.update);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
