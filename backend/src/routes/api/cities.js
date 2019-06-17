const express = require("express");
const router = express.Router();
const BSON = require('bson');
const Long = BSON.Long;
const Cities = require("../../models/cities.js")
const db = require("../../db.js")

/**
 * Send all stored cities
 */
router.get("/1", (req, res) => {
  let result = [];
  Cities.find().toArray(function(err, docs) {
    let o = BSON.serialize(docs);
    let oo = BSON.deserialize(o);
    result.push(oo);
    console.log(result)
    res.send(result);
  });
})


module.exports = router;