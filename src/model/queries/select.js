const connect = require('../db_connect.js');

exports.selecAllOrders = (cb) => {
  const sql = 'select i.title, o.id, o.quantity, o.status, i.image from orders o inner join items i on o.itemID=i.id;';

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    console.log(result.rows);
    cb(result.rows);
  });
};
