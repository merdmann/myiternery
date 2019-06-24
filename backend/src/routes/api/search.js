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

  console.log(name);
  
  Cities.find({name: {$regex: '/Rom/'}}).then(doc => {
    doc.forEach( elem => { 
      result.push({ city:elem.city, image: null,  country:elem.country}) 
    }) ;

    res.send(result);
  })
  .catch(err => {
    console.error(err)
  })

});

module.exports = router;