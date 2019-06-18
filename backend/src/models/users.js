const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    fullname   : String,
    secret     : String
  });

  module.exports = mongoose.model('Users', Users);
