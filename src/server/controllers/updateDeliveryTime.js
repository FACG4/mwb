const update = require('../model/queries/update');
const select = require('../model/queries/select');
const { sendSMS } = require('./sendSMS');

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

      const ChangedTime = result.rows[0].delivery_time;

      sendSMS('+17192203059', `your order date has changed to: ${ChangedTime}`, targetPhone, (err2, done) => {
        if (err2) return res.json({ status: false, error: err2 });

        res.send({
          status: true,
          message: 'the data was updated successfully',
          data: result,
        });
      });
    });
  });
};

module.exports = {
  updateDeliveryTime,
};
