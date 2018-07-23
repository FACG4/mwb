const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl = process.env.DB_URL;

if (process.env.NODE_ENV === 'development') dbUrl = process.env.TEST_DB_URL;
if (!dbUrl) throw new Error('dbUrl must be defined');

module.exports = new Pool({
  connectionString: dbUrl,
  ssl: true,
});
