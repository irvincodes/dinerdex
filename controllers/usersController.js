const User = require("../models/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;
// const plainPassword =

const index = async (req, res) => {
  const context = { title: "WELCOME TO DINERDEX", msg: "" };
  res.render("users/login", context);
};

const newUser = (req, res) => {
  const context = { title: "NEW USER", newUser };
  res.render("users/new", context);
};

const create = (req, res) => {
  const { fullName, userId, password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log("hash error", err);
      res.redirect("/users/new");
      return;
    }
    const user = new User({ fullName, userId, password: hashedPassword });

    user
      .save()
      .then((user) => {
        console.log("user saved: ", user);
        res.redirect("/users/login");
      })
      .catch((err) => {
        console.log("save error: ", err);
        res.redirect("/users/new");
      });
  });
};
// const user = new User(req.body);

//   user
//     .save()
//     .then((user) => {
//       console.log("user saved: ", user);
//       res.redirect("/users/login");
//     })
//     .catch((err) => {
//       console.log("save error: ", err);
//       res.redirect("/users/new");
//     });
// };

const login = async (req, res) => {
  const { userId, password } = req.body;
  const user = await User.findOne({ userId }).exec();
  if (user === null) {
    const context = { title: "WELCOME TO DINERDEX", msg: "User ID not found." };
    res.render("users/login", context);
    return;
  }

  bcrypt.compare(password, user.password, (err, result) => {
    console.log("password", password);
    console.log("user.password", user.password);
    if (result) {
      req.session.userId = user._id;
      console.log("req.session.userId", req.session.userId);
      console.log("RESULT: ", result);
      res.redirect("/diners");
    } else {
      console.log("RESULT: ", result);
      const context = {
        title: "WELCOME TO DINERDEX",
        msg: "Incorrect password.",
      };
      res.render("users/login", context);
    }
  });
};

const logout = (req, res) => {
  req.session.destroy();
  res.clearCookie("sessionId");
  const context = { title: "Successfully Logged Out." };
  res.render("users/logout", context);
};

module.exports = {
  index,
  new: newUser,
  create,
  login,
  logout,
};
