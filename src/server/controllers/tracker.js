/* eslint-disable */


const update = require('../model/queries/update');


const tracker = (req, res) => {
  const trakerNumber = req.body.trakerNumber;
  const orderId = req.body.orderId;

  update.updateTrackerNumber(trakerNumber, orderId , (cb) => {
     res.send({ data: cb});
  });
};


module.exports = { tracker };
