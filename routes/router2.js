var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("mw1");
  next('router')
});

router.use("/", (req, res, next) => {
  console.log("mw2");
  next();
});

module.exports = router;
