fs = require('fs')
var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer("I'm a string!", "utf-8")
var output =

fs.readFileSync('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  buffer=data;
});

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
