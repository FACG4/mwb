const connection = require('./connection');

// init abstract query function

module.exports = sql => new Promise((resolve, reject) => {
  connection.query(sql, (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});
