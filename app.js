var express = require('express');
var app = express();

// Retrieve port assigned by Heroku
var port = process.env.PORT || 8080;


app.use(express.static('.'));

app.listen(port, function () {
  console.log('Reponsive blog listening on port:', port);
});