const connect = require('../db_connect.js');

exports.selecAllOrders = (cb) => {
  const sql = 'select i.title, o.id, o.quantity, o.traking_number, o.approved_date, o.seen ,o.status, o.delivery_date, i.image from orders o inner join items i on o.item_id=i.id;';

  connect.query(sql, (err, result) => {
    if (err) cb(err);
    cb(null, result.rows);
  });
};

exports.getAllItems = (cb) => {
  const sql = 'select title, id, image from items;';

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    cb(null, result.rows);
  });
};

exports.selectOneUser = (id, cb) => {
  const sql = `select mobile_number from users where id=${id};`;

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    cb(null, result);
  });
};

exports.selectUserBasedOnOrderId = (order_id, cb) => {
  const sql = {
    text: 'select mobile_number from users u inner join orders o on u.id=o.user_id where o.id=$1;',
    values: [order_id],
  };

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    cb(null, result);
  });
};
