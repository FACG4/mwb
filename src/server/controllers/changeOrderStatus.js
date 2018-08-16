
const update = require('../model/queries/update');
const select = require('../model/queries/select');
const { sendSMS } = require('./sendSMS');

const changeOrderStatus = (req, res) => {
  const status = req.body.newStatus;
  const id = req.body.orderId;

  update.updateOrderStatus(status, id, (err, result) => {
    if (err) {
      return res.json({
        state: false,
        error: err,
      });
    }

    select.selectUserBasedOnOrderId(id, (err, result1) => {
      if (err) return err;
      const targetPhone = result1.rows[0].mobile_number;
      sendSMS('+17192203059', `your new status is: ${result.rows[0].status}`, targetPhone, (err, done) => {
        if (err) return res.json({ state: false, error: err });

        res.send({
          state: true,
          message: 'the data was updated successfully',
          data: result,
          smsResult: done,
        });
      });
    });
  });
};

module.exports = {
  changeOrderStatus,
};
