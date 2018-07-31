const connection = require('../db_connect');

// init abstract query function

const queryFunction = sql => new Promise((resolve, reject) => {
  connection.query(sql, (err, res) => {
    if (err) return reject(err);
    return resolve(res);
  });
});

module.exports = queryFunction;
