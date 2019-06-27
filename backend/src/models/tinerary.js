const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tinerary = new Schema({
    city  : {
      type: String,
      required:true
    },

    description : {
    	type: String,
    	required: true
    },

    liked: {
    	type: Number,
    },

    cost: {
      type: Number,
    },

    duration: {
    	type: Number,
    }, 

    country: {
       type: String,
    } 
  });
 
  module.exports = mongoose.model('tinerary', tinerary);
