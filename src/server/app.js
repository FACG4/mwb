const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const controllers = require('./controllers/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(controllers);
app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
