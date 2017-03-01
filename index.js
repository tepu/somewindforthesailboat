var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/main.html'));
});


app.listen(80);