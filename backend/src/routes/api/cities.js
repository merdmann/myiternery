const express = require("express");
const router = express.Router();
const BSON = require('bson');
const mongoose = require('mongoose'); 
const Cities = require("../../models/cities.js")

/**
 * Send all stored cities
 */
router.get("/1", (req, res) => {
  let result = [];
  let img = new Map();
  
  Cities.find({}).then(doc => {
    doc.forEach( elem => result.push({city:elem.city, image:  elem.img_url, country:elem.country} ))
    res.send(result);
  })
  .catch(err => {
    console.error(err)
  })

});

module.exports = router;