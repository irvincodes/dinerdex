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

const show = (req, res) => {
  Diner.findById(req.params.id).then((diner) => {
    const reviews = diner.reviews;
    const reviewsSum = reviews.length;
    const ratingSum = reviews
      .map((r) => r.rating)
      .reduce((acc, val) => acc + val, 0);
    const averageRating = () => {
      if (reviewsSum === 0) {
        return "N.A";
      } else {
        const avgRating = ratingSum / reviews.length;
        return avgRating.toFixed(2);
      }
    };
    const context = {
      title: "Diner Details",
      diner,
      averageRating,
      reviewsSum,
    };
    res.render("diners/show", context);
  });
};

const deleteDiner = (req, res) => {
  const { id } = req.params;
  Diner.findByIdAndDelete(id)
    .exec()
    .then((diner) => {
      console.log("deleted diner: ", diner._id);
      res.redirect("/diners");
    });
};

const editEntry = (req, res) => {
  const { id } = req.params;
  Diner.findById(id)
    .exec()
    .then((diner) => {
      console.log("Edit: ", id);
      const context = { title: "Edit Entry", id, diner };
      res.render("diners/editEntry.ejs", context);
    });
};

const update = (req, res) => {
  const { id } = req.params;
  Diner.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((diner) => {
      res.redirect(`/diners/${id}`);
    });
};

module.exports = {
  index,
  new: newDiner,
  create,
  show,
  delete: deleteDiner,
  editEntry,
  update,
};
