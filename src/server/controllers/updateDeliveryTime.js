const update = require('../model/queries/update');
const select = require('../model/queries/select');

const updateDeliveryTime = (req, res) => {
  const {
    newDeliveryTime,
  } = req.body;
  const id = req.body.orderId;

  update.updateDeliveryTime(newDeliveryTime, id, (err, result) => {
    if (err) return res.json({ status: false, error: err });

    select.selectOneUser(result.rows[0].user_id, (err1, result1) => {
      if (err1) return res.json({ status: false, error: err1 });
      const targetPhone = result1.rows[0].phone;
      const accountSid = process.env.accountSid;
      const authToken = process.env.authToken;
      const client = require('twilio')(accountSid, authToken);
      const ChangedTime = result.rows[0].delivery_time;
      client.messages
        .create({
          from: '+17192203059',
          body: `your order date has changed to: ${ChangedTime}`,
          to: targetPhone,
        })
        .then(message => console.log(message.sid))
        .done();

      res.send({
        state: true,
        message: 'the data was updated successfully',
        data: result,
      });
    });
  });
};

module.exports = {
  updateDeliveryTime,
};
