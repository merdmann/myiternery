const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("all my cities");
});

router.get("/1", (req, res) => {
  res.send("city number 1");
});

module.exports = router;
