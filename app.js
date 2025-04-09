var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var https = require("https");
var fs = require("fs");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Create HTTPS server
const port = 3000;

if (process.env.NODE_ENV === "production") {
  app.listen(port, () => {
    console.log(`HTTP server running on port ${port}`);
  });
} else {
  app.listen(port, () => {
    console.log(`HTTP server running on port ${port}`);
  });
}
