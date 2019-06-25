const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cities = new Schema({
    city_name  : {
      type: String,
      required:true
    },

    country: {
       type: String,
       requird: true
    },
  
    img_url: {
       type: String,
       required: true
    }
  });

  module.exports = mongoose.model('cities', Cities);
