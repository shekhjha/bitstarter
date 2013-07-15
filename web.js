fs=require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer("I'm a string!", "utf-8")

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buffer.toString(fs.readFileSync('index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
