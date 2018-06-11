module.exports = (function(appConfig) {
  "use strict";

  const express = require("express");
  const path = require("path");
  const favicon = require("serve-favicon");
  // const logger = require("morgan");
  const cookieParser = require("cookie-parser");
  const session = require("express-session");
  const bodyParser = require("body-parser");

  const routes = require("./routes/index")(appConfig);

  const app = express();

  // view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");

  app.use(favicon(path.join(__dirname, "../client", "favicon.png")));
  // app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "../client")));

  //
  // n.b. - make sure you set a unique name for the session to avoid confusion esp. when debugging on localhost.
  //
  app.use(session({resave: false, secret: "boogaloo", name: "nqm-app-minimal", saveUninitialized: false}));

  app.use("/", routes);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  return app;
});
