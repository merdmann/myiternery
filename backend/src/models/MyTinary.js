const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MyTinary = new Schema({
    city_name  : {
      type: String,
      required:true
    }

    descption : {
    	type: String,
    	required: true;
    }

    theme : {
    	type: String,
    	required: true;
    }

    liked: {
    	type: int;
    	required: true;
    }

    cost : {
      type: int;
      required: true;
    }

    duration: {
    	type: float;
    }

    country: {
       type: String,
       requird: true
    }

    comments: {
      date: 
      by: String;
    }
  
    img_url: {
       type: String,
       requird: true
    }
  });

  module.exports = mongoose.model('cities', Cities);
