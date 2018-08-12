const connect = require('../db_connect.js');

exports.updateOrderStatus = (status, id, cb) => {
  const sql = `UPDATE orders SET status = '${status}' WHERE id=${id} returning status`;
  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    return cb(null, result);
  });
};

exports.updateDeliveryTime = (deliveryTime, id, cb) => {
  const sql = `UPDATE orders SET delivery_time = '${deliveryTime}' WHERE id=${id} returning delivery_time`;
  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    return cb(null, result);
  });
};

exports.updateTrackerNumber = (trakingNumber, id, cb) => {
  const sql = `UPDATE orders SET traking_number = '${trakingNumber}', status='Delivered' WHERE id=${id}`;

  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    return cb(null, result);
  });
};
