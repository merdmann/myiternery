const  express = require('express');
const app = express();
const citiesRoute = require("./routes/api/cities");
const bodyParser = require("body-parser");
const cors = require("cors");

const BSON = require('bson');
const Long = BSON.Long;
var mongoose = require('mongoose'); 
mongoose.connect("mongodb+srv://merdmann:Dieter1234@cluster0-z60nm.azure.mongodb.net/MyTinerary?retryWrites=true&w=majority");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //+++++++++ Connected to db call back ++++++++++++++++++++++++
  console.log("Connected with db")
  app.use(bodyParser.json());
  app.use(cors());

  citiesRoute.initialize(db)

  app.use("/api/cities", citiesRoute);

  db.close()
}) /*+++++++++++++++++ db open end++++++++++++++++++++++++++++++ */ 
console.log(citiesRoute)
