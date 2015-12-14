let port = process.env.PORT || 8889;
let express = require('express');

let app = express();

app.use(express.static('client'));

app.listen(port);
