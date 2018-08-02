/* eslint-disable */


const update = require('../model/queries/update');


const changeOrderStatus = (req, res) => {
  const status = req.body.newStatus;
  const id = req.body.orderId;

  update.updateOrderStatus(status, id , (cb) => {
     res.send({ data: cb});
  });
};


module.exports = { changeOrderStatus };
