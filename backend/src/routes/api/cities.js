const express = require("express");
const router = express.Router();
const BSON = require('bson');
const Long = BSON.Long;
const mongoose = require('mongoose'); 
let   Cities = null;

const initialize = function (aCities) {
    Cities = aCities;
}

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

router.get("/1", (req, res) => {
  res.send("city number 1");
});


module.exports = initialize;
module.exports = router;