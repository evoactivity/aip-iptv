const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var porta = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./app/controllers/index')(app);

app.listen(porta);
