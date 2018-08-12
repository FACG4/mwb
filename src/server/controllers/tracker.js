/* eslint-disable */
const update = require('../model/queries/update');
const select = require('../model/queries/select');

const tracker = (req, res) => {
  const trakerNumber = req.body.trakerNumber;
  const orderId = req.body.orderId;

  update.updateTrackerNumber(trakerNumber, orderId, (cb) => {
    select.selectUserBasedOnOrderId(cb.rows[0].orderid, cb1 => {
      const targetPhone = cb1.rows[0].phone;

      const accountSid = 'AC31f266fae63a02c957861b2d77ef11e3';
      const authToken = 'f7b78d3882f3a9cb068f921e473660f4';
      const client = require('twilio')(accountSid, authToken);
      client.messages
        .create({
          from: '+17192203059',
          body: `your tracking number is: ${trakerNumber}`,
          to: targetPhone
        })
        .then(message => console.log(message.sid))
        .done();

    });
    res.send({
      data: cb
    });
  });
};

module.exports = {
  tracker
};
