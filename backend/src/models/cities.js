const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cities = new Schema({
    City    : String,
    Country : String
  });

  module.exports = mongoose.model('Cities', Cities);
