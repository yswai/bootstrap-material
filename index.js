'use strict';

let port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
let express = require('express');

let app = express();

app.use(express.static('client'));

app.listen(port);
console.log('Server is listening at port : ' + port);