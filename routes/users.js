var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.json({ message: "hello world, from: " + Math.random() * 100 });
});

router.get("/test", function (req, res, next) {
  return res.json({ message: "hello world, from the server, test route" });
});

module.exports = router;
