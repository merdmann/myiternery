var express = require('express');
var app = express();

app.get('/test/', function (req, res) {
  res.send('HALLO WORLD!');
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
})