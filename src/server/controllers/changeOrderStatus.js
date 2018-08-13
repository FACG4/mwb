
const update = require('../model/queries/update');
const select = require('../model/queries/select');
const { sendSMS } = require('./sendSMS');

const changeOrderStatus = (req, res) => {
  const status = req.body.newStatus;
  const id = req.body.orderId;

  update.updateOrderStatus(status, id, (err, result) => {
    if (err) {
      return res.json({
        status: false,
        error: err,
      });
    }

    select.selectUserBasedOnOrderId(id, (err1, result1) => {
      if (err1) return console.log('in selecting user: ', err1);
      const targetPhone = result1.rows[0].phone;

      sendSMS('+17192203059', `your new status is: ${result.rows[0].status}`, targetPhone, (err2, done) => {
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
  changeOrderStatus,
};
