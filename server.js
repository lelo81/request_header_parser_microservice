'use strict';

var express = require('express');

var app = express();
var favicon = require('serve-favicon');
var path = require('path');

app.use(favicon(__dirname + '/public/img/clementine_150.png'));

app.enable('trust proxy');

var response = {
	ipaddress:null,
	language:null,
	software:null
};

app.get('/api/whoami/', function(req, res) {
  
  response.ipaddress = req.ip;
  response.language = req.get('Accept-Language').split(',')[0];
  response.software = req.get('User-Agent').split('(')[1].split(')')[0];

  res.end(JSON.stringify(response));
});


app.get('*', function(req, res) {

    res.sendFile(path.join(__dirname, 'public' + '/index.html'));
  
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});



