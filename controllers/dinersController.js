const Diner = require("../models/Diner");

const index = (req, res) => {
  Diner.find().exec.then((diners) => {
    const context = { title: "ALL DEX ENTRIES", diners };
    res.render("diners/index", context);
  });
};

module.exports = {
  index,
};
