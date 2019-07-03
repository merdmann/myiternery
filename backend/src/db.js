const mongoose=require("mongoose");

class Database {
    constructor() {
      this._connect()
    }
    
  _connect() {
        mongoose.connect("mongodb+srv://myit:Dieter1234@cluster0-fgzul.mongodb.net/MyTin?retryWrites=true&w=majority")
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error ' + err )
         })
    }
  }
  
  module.exports = new Database()
