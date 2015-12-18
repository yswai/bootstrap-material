'use strict';

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var express = require('express');

var app = express();

app.use(express.static('client'));

app.listen(port);
console.log('Server is listening at port : ' + port);
