const Diner = require("../models/Diner");

const index = (req, res) => {
  Diner.find()
    .exec()
    .then((diners) => {
      const context = { title: "ALL DEX ENTRIES", diners };
      res.render("diners/index", context);
    });
};

const newDiner = (req, res) => {
  const context = { title: "NEW ENTRY", newDiner };
  res.render("diners/new", context);
};

const create = (req, res) => {
  const diner = new Diner(req.body);
  diner
    .save()
    .then((diner) => {
      console.log("diner: ", diner);
      res.redirect("/diners");
    })
    .catch((err) => {
      console.log("error: ", err);
      res.redirect("/diners/new");
    });
};

module.exports = {
  index,
  new: newDiner,
  create,
};
