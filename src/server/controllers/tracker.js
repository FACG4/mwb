
const update = require('../model/queries/update');
const select = require('../model/queries/select');
const { sendSMS } = require('./sendSMS');


const tracker = (req, res) => {
  try {
    const trakerNumber = req.body.trakerNumber;
    const orderId = req.body.orderId;

    update.updateTrackerNumber(trakerNumber, orderId, (err, result) => {
      if (err) {
        return res.json({
          status: false,
          error: err,
        });
      }

      select.selectUserBasedOnOrderId(result.rows[0].orderid, (err, result1) => {
        if (err) {
          return res.json({
            status: false,
            error: err,
          });
        }
        const targetPhone = result1.rows[0].phone;

        sendSMS('+17192203059', `your tracking number is: ${trakerNumber}`, targetPhone, (err, done) => {
          if (err) return res.json({ status: false, error: err });

          res.send({
            status: true,
            message: 'Success',
            data: result,
            smsResult: done,
          });
        });
      });
    });
  } catch (err) {
    console.log(err.stack);
    res.json({ status: false, error: err, message: 'UNExpected' });
  }
};

module.exports = {
  tracker,
};
