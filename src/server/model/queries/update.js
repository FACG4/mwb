/*eslint-disable*/
const connect = require('../db_connect.js');

exports.updateOrderStatus = (status, id, cb) => {
  const sql = `UPDATE orders SET status = '${status}' WHERE id=${id} returning status`;

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    cb(result);
  });
};

exports.updateDeliveryTime = (deliveryTime, id, cb) => {
  const sql = `UPDATE orders SET delivery_time = '${deliveryTime}' WHERE id=${id} returning delivery_time`;

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    {
      cb(result);
    }
  });
};

exports.updateTrackerNumber = (traking_number, id, cb) => {
  const sql = `UPDATE orders SET traking_number = '${traking_number}', status='Sent' WHERE id=${id}`;

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    {
      console.log('hhhhhhhhhhhhhhhh', result.rows[0].delivery_time);
      cb(result);
    }
  });
};
