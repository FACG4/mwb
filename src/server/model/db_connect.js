const { Pool } = require('pg');
const url = require('url');
require('env2')('./config.env');
const dbLink = require('./config.js')();

if (!dbLink) throw new Error('Enviroment variable DB_URL must be set');


const parms = url.parse(dbLink);
const [username, password] = parms.auth.split(':');

const options = {
  host: parms.hostname,
  port: parms.port,
  database: parms.pathname.split('/')[1],
  user: username,
  password,
};

module.exports = new Pool(options);
