const connect = require('../db_connect.js');

exports.addNewOrder = (item_id, user_id, quantity, cb) => {
  const sql = {
    text: 'INSERT INTO orders (item_id, user_id, quantity) values($1, $2, $3)',
    values: [item_id, user_id, quantity],
  };

  connect.query(sql, (err, result) => {
    if (err) return cb(err);
    cb(null, result);
  });
};
