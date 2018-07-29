const { Pool } = require('pg');
const url = require('url');
require('env2')('./config.env');
const db_link = require('./config.js')();


// let DB_URL = process.env.DB_URL;
// if (!process.env.DB_URL) {
//   DB_URL = process.env.DB_URL;
// }

if (!db_link) throw new Error('Enviroment variable DB_URL must be set');


const parms = url.parse(db_link);
const [username, password] = parms.auth.split(':');

const options = {
  host: parms.hostname,
  port: parms.port,
  database: parms.pathname.split('/')[1],
  user: username,
  password,
};

module.exports = new Pool(options);
