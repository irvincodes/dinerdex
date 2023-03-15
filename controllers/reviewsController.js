const Diner = require("../models/Diner");

const index = (req, res) => {
  const dinerId = req.params.id;
  Diner.findById(dinerId)
    .exec()
    .then((diner) => {
      const context = { title: " REVIEWS", diner };
      res.render("diners/indexReviews", context);
    });
};

const newReview = (req, res) => {
  const dinerId = req.params.id;
  console.log("dinerId: ", dinerId);
  Diner.findById(dinerId)
    .exec()
    .then((diner) => {
      const reviews = diner.reviews;
      const context = { title: "NEW REVIEW", diner, newReview, reviews };
      res.render("diners/newReview", context);
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const create = (req, res) => {
  const { id } = req.params;
  Diner.findById(id).then((diner) => {
    diner.reviews.push(req.body);
    diner.save().then((d) => {
      console.log("diner saved: ", d);
      const context = { title: "REVIEWS", diner };
      res.render("diners/indexReviews", context);
    });
    //     })
    //     .catch((err) => {
    //       res.send("Save Error");
    //     });
    // })
    // .catch((err) => {
    //   res.send("findById error");
    // });
  });
};

module.exports = {
  index,
  new: newReview,
  create,
};
