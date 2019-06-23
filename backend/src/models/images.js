const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Images = new Schema({
    name   : {
      type: String,
      required:true
    },

    country: {
       type: String,
       requird: true
    },

    image: {
      type: String,
      required: true
    }
  
  });

  module.exports = mongoose.model('images', Images);


