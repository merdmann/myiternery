const express = require("express");
const router = express.Router();
const BSON = require('bson');
const mongoose = require('mongoose'); 
const Cities = require("../../models/cities.js")
const Images = require("../../models/images")


/**
 * Send all stored cities inkl the image links
 */
router.get("/1", (req, res) => {
  let result = [];
  let img = new Map();
  
  // load all imges into a map
  Images.find({}).then( docs => docs.forEach( doc=> {img.set(doc.name, doc.image); console.log(doc.name)}))

  Cities.find({}).then(doc => {
    doc.forEach( elem => result.push({city:elem.city, image: img.get( elem.city ), country:elem.country} ))
    res.send(result);
  })
  .catch(err => {
    console.error(err)
  })

});

module.exports = router;