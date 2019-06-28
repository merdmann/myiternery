const express = require("express");
const router = express.Router();
const mongoose = require('mongoose'); 
const itinerary = require("../../models/tinerary.js")

/**
 * return all itineraries for the given city.
 */
router.get("/search/", (req, res) => {
  const city = req.query.city;
  let next = 0;

  console.log(city)
  
  let result = [];
  let name = req.query.name;
  
  itinerary.find({city: city}).then(doc => {
    doc.forEach( elem => { 
      result.push( elem ) 
    }) ;
    res.send(result);
  }).catch(err => {
    console.error(err)
  })
});
  

module.exports = router;