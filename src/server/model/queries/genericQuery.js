const connection = require('../db_connect');

const queryFunction = sql => new Promise((resolve, reject) => {
  connection.query(sql, (err, res) => {
    if (err) return reject(err);
    return resolve(res);
  });
});

module.exports = queryFunction;
