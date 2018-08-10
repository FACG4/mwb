const connect = require('../db_connect.js');

exports.selecAllOrders = (cb) => {
  const sql = 'select i.title, o.id, o.quantity, o.status, o.delivery_time, i.image from orders o inner join items i on o.item_id=i.id;';
  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    return cb(result.rows);
  });
};

exports.getAllItems = (cb) => {
  const sql = 'select title, id, image from items;';

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    return cb(result.rows);
  });
};
