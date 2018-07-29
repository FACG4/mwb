const { Pool } = require('pg');

//  asign the dbUrl
let dbUrl = process.env.DB_URL;

// reasign the dbUrl test based our enviroment
if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DB_URL_TEST;
}

// checkout of databse connection
if (!dbUrl) {
  throw new Error('Can\'t access to database ur');
}

// instance of pool
module.exports = new Pool({
  connectionString: dbUrl,
  ssl: false,
});
