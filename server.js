'use strict';

var express = require('express');

var app = express();
require('dotenv').load();

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

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});



