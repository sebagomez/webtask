var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var dir = path.join(__dirname, 'images');
console.log('static dir:' + dir);
app.use(express.static(dir));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3003, function () {
    console.log("Listening on port %s...", server.address().port);
});