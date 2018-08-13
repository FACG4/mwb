/* eslint-disable */
const update = require('../model/queries/update');
const select = require('../model/queries/select');

const tracker = (req, res) => {
  const trakerNumber = req.body.trakerNumber;
  const orderId = req.body.orderId;

  update.updateTrackerNumber(trakerNumber, orderId, (err, result) => {
    if (err) return console.log('in updating tracker number: ', err);    select.selectUserBasedOnOrderId(result.rows[0].orderid, (err1,result1) => {
      if (err1) return console.log('in updating tracker number: ', err1);
      const targetPhone = result1.rows[0].phone;
      const accountSid = process.env.accountSid;
      const authToken = process.env.authToken;
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
      data: result
    });
  });
};

module.exports = {
  tracker
};
