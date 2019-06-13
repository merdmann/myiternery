var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbuser:Dieter%2330@cluster0-j2uvi.azure.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected")
});





