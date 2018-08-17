const insert = require('../model/queries/insert');

const addNewOrder = (req, res) => {
  const item_id = req.body.item_id;
  const user_id = req.body.user_id;
  const quantity = req.body.quantity;

  insert.addNewOrder(item_id, user_id, quantity, (error, result) => {
    if (error) return res.json({ status: false, error });

    res.send({
      status: true,
      message: 'Data was inserted successfully',
      data: result,
    });
  });
};


module.exports = { addNewOrder };
