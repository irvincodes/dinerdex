const Diner = require("../models/Diner");

const index = (req, res) => {
  Diner.find()
    .exec()
    .then((diner) => {
      const context = { title: `Reviews: ${diner.name}`, diner };
      res.render("/diners/:id/reviews", context);
    });
};

module.exports = {
  index,
};
