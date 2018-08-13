
const update = require('../model/queries/update');
const select = require('../model/queries/select');
const { sendSMS } = require('./sendSMS');

const tracker = (req, res) => {
  const trakerNumber = req.body.trakerNumber;
  const orderId = req.body.orderId;

  update.updateTrackerNumber(trakerNumber, orderId, (err, result) => {
    if (err) {
      return res.json({
        status: false,
        error: err,
      });
    }

    select.selectUserBasedOnOrderId(result.rows[0].orderid, (err1, result1) => {
      if (err1) {
        return res.json({
          status: false,
          error: err1,
        });
      }
      const targetPhone = result1.rows[0].phone;

      sendSMS('+17192203059', `your tracking number is: ${trakerNumber}`, targetPhone, (err2, done) => {
        if (err2) return res.json({ status: false, error: err2 });

        res.send({
          status: true,
          message: 'Success',
          data: result,
        });
      });
    });
  });
};

module.exports = {
  tracker,
};
