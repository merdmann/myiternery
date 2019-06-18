const express = require("express");
const router = express.Router();
const mongoose = require('mongoose'); 
const Cities = require("../../models/cities.js")


/**
 * Send all stored cities
 */
router.get("/1", (req, res) => {
  Cities.find({}).then(doc => {
    console.log(doc)
    console.log(Cities);
    res.send(doc)
  })
  .catch(err => {
    console.error(err)
  })
  });

module.exports = router;