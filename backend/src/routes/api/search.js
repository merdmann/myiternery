const express = require("express");
const router = express.Router();
const BSON = require('bson');
const mongoose = require('mongoose'); 
const Cities = require("../../models/cities.js")
const Images = require("../../models/images")

/**
 * Send all stored cities inkl the image links
 * https://stackoverflow.com/questions/3305561/how-to-query-mongodb-with-like
 * 
 * 
 */
router.get("/cities/", (req, res) => {
  let result = [];
  let name = req.query.name;
  
Cities.find({city_name:{$regex: "^" +name + "" }}).then(doc => {
    doc.forEach( elem => { 
      result.push({ city_name:elem.city_name, country:elem.country, picture:elem.img_url}) 
    }) ;
    res.send(result);
  })
  .catch(err => {
    console.error(err)
  })

});

module.exports = router;