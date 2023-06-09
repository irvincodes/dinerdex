var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");

require("dotenv").config();

require("./config/database");

const MongoStore = require("connect-mongo");
const sessionStore = MongoStore.create({
  mongoUrl: process.env.DATABASE_URL,
  collectionName: "session",
});

var indexRouter = require("./routes/index");
var dinersRouter = require("./routes/diners");
const reviewsRouter = require("./routes/reviews");
const usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("trust proxy", 1);

app.use(
  session({
    secret: "secret-code",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 6000000 },
    store: sessionStore,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/diners", dinersRouter);
app.use("/", reviewsRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
