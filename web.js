// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.render('index');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
