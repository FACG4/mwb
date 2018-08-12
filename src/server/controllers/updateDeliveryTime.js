const update = require('../model/queries/update');
const select = require('../model/queries/select');

const updateDeliveryTime = (req, res) => {
  const newDeliveryTime = req.body.newDeliveryTime;
  const id = req.body.orderId;

  update.updateDeliveryTime(newDeliveryTime, id, (cb) => {
    select.selectOneUser(cb.rows[0].user_id, (cb1) => {
      const targetPhone = cb1.rows[0].phone;
      const accountSid = 'AC31f266fae63a02c957861b2d77ef11e3';
      const authToken = 'f7b78d3882f3a9cb068f921e473660f4';
      const client = require('twilio')(accountSid, authToken);
      const ChangedTime = cb.rows[0].delivery_time;
      client.messages
        .create({ from: '+17192203059', body: `your order has changed to: ${ChangedTime}`, to: targetPhone })
        .then(message => console.log(message.sid))
        .done();
    });

    res.send({ data: cb });
  });
};

module.exports = { updateDeliveryTime };
