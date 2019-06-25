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

    }

    duration {
    	type: 
    }

    country: {
       type: String,
       requird: true
    }

    comments: {
    type String,
    required: true	
    }



  
    img_url: {
       type: String,
       requird: true
    }
  });

  module.exports = mongoose.model('cities', Cities);
