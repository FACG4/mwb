const insert = require('../model/queries/insert');

const addNewOrder = (req, res) => {
  const item_id = req.body.item_id;
  const user_id = req.body.user_id;
  const quantity = req.body.quantity;

  insert.addNewOrder(item_id, user_id, quantity, (error, result) => {
    if (error) return res.json({ status: false, error });


    // here
    select.selectOneUser(user_id, (err, result1) => {
      if (err) return res.json({ status: false, error: err });
      const targetPhone = result1.rows[0].phone;


      sendSMS('+17192203059', 'You have recieved new order.', targetPhone, (err, done) => {
        if (err) return res.json({ status: false, error: err });

        res.send({
          status: true,
          message: 'the data was updated successfully',
          data: result,
          smsResult: done,
        });
      });
    });
    // here


    res.send({
      status: true,
      message: 'Data was inserted successfully',
      data: result,
    });
  });
};


module.exports = { addNewOrder };
