console.log("Server starting");

var express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.static('/home/site/wwwroot/build'));
app.listen(port);

module.exports = app

console.log("Server running on port " + port);
