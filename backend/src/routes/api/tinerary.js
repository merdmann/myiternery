const express = require("express");
const router = express.Router();
const mongoose = require('mongoose'); 
const tinerary = require("../../models/tinerary.js")

/**
 * return all tineraries for the given city.
 */
router.get("/search/", (req, res) => {
  let result = [];
  const city = req.query.city;
  
  tinerary.find().then(doc => { result.push(doc); 
    res.send(result);
  })
  .catch(err => {
    console.error(err)
  })

} );

module.exports = router;