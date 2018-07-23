const connection = require('../connection');

const query = sql => new Promise((reject, resolve) => {
  connection.query(sql, (err, res) => {
    if (err) return reject(err);
    return resolve(res);
  });
});

module.exports = query;
