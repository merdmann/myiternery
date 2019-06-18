const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cities = new Schema({
    city    : {
      type: String,
      required:true
    },

    country: {
       type: String,
       requird: true
    }
  
  });

  module.exports = mongoose.model('cities', Cities);
