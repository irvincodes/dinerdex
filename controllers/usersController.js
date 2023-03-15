const User = require("../models/User");

const index = async (req, res) => {
  const context = { title: "WELCOME TO DINERDEX", msg: "1st message" };
  res.render("users/login", context);
};

module.exports = {
  index,
};
