console.log("Server starting");

var express = require('express'),
  app = express(),
  port = 8080;

app.use(express.static('build'));

if (! module.parent) {
  app.listen(port);
}

module.exports = app

console.log("Server running on port " + port);
