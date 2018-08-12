/* eslint-disable */
const update = require('../model/queries/update');
const select = require('../model/queries/select');

const changeOrderStatus = (req, res) => {
  const status = req.body.newStatus;
  const id = req.body.orderId;

  update.updateOrderStatus(status, id , (cb) => {
    select.selectUserBasedOnOrderId(id, cb1 => {
      const targetPhone = cb1.rows[0].phone;
      const accountSid = 'AC31f266fae63a02c957861b2d77ef11e3';
      const authToken = 'f7b78d3882f3a9cb068f921e473660f4';
      const client = require('twilio')(accountSid, authToken);
      client.messages
        .create({
          from: '+17192203059',
          body: `your new status is: ${cb.rows[0].status}`,
          to: targetPhone
        })
        .then(message => console.log(message.sid))
        .done();

    });

     res.send({ data: cb});
  });
};

module.exports = { changeOrderStatus };
