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

const  Users = db.collection("Users")

function AddUser( name, secret ) {
  let error = null;
  Users.insertOne({fullname: name, "secret": secret }, 
    function( err, doc ) { error = err });

  return error;
}

AddUser( "Marina Massalsiki", 4713 );

function UserExists(name, secret) {
  const query = {fullname: "Michael Erdmann"}; 
  let instance = 0;
  Users.find(query).toArray( function( err, doc){ 
    let o = BSON.serialize(doc);
    let oo = BSON.deserialize(o);
    console.log(oo[0]._id)
    console.log(oo[0].secret)
  })
  return instance;
}

UserExists("Michael Erdmann")

db.close()
}) /*+++++++++++++++++ db open end++++++++++++++++++++++++++++++ */ 
app.use(bodyParser.json());
app.use(cors());

app.use("/api/cities", citiesRoute);

app.get('/test/', function (req, res) {
  res.send('HALLO WORLD!');
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
})