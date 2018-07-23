const fs = require('fs');
const path = require('path');
const query = require('./queries/query_function');


query(fs.readFileSync(path.join(__dirname, '.', 'build.sql')).toString())
  .catch(err => console.log(err))
  .then(console.log('database is built successfully'));
