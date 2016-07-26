var express = require('express');
var app = express();

app.get('/sample-0', function (req, res) {
    res.sendfile('./sample-0.html');
});

app.get('/sample-1', function (req, res) {
    res.sendfile('./sample-1.html');
});

app.get('/sample-2', function (req, res) {
    res.sendfile('./sample-2.html');
});

app.get('/sample-3', function (req, res) {
    res.sendfile('./sample-3.html');
});

app.get('/sample-4', function (req, res) {
    res.sendfile('./sample-4.html');
});


app.use(express.static(__dirname + '/public'));

var server = app.listen(80, function () {
  var host = "localhost";
  var port = 80;

  console.log('Example app listening at http://%s:%s', host, port);
});