const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllers = require('./controllers/index');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(controllers);
app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
