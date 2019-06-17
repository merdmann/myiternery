const mongoose=require("mongoose");

class Database {
    constructor() {
      this._connect()
    }
    
  _connect() {
       mongoose.connect("mongodb+srv://merdmann:Dieter1234@cluster0-z60nm.azure.mongodb.net/MyTinerary?retryWrites=true&w=majority")
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }
  
  module.exports = new Database()
