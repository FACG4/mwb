/*eslint-disable*/
const connect = require('../db_connect.js');

exports.updateOrderStatus = (status, id, cb) => {

  const sql =  {
    text:`UPDATE orders SET status = $1 WHERE id=$2 returning status`,
    values:[status, id]
  }

  connect.query(sql, (err, result) => {
    if (err) return cb(err);
    cb(null,result);
  });
};

exports.updateDeliveryTime = (deliveryTime, id, cb) => {
  const sql =  {
    text:`UPDATE orders SET delivery_time =$1 WHERE id=$2 returning delivery_time, user_id`,
    values:[deliveryTime, id]
  }

  connect.query(sql, (err, result) => {
    if (err) return cb(err); {
      cb(null,result);
    }
  });
};

exports.updateTrackerNumber = (traking_number, id, cb) => {
  const sql =  {
    text:`UPDATE orders SET traking_number = $1, status='Delivered' WHERE id=$2 returning id as orderId`,
    values:[traking_number, id]
  }

  connect.query(sql, (err, result) => {
    if (err) return cb(err); {
      cb(null,result);
    }
  });
};
