const fs = require('fs');
const path = require('path');
const dbQuery = require('./queries/genericQuery');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();

dbQuery(sql).then(res => console.log('connection successful, database is building successfully')).catch(err => console.log('There was a problem with the database build file', err));
