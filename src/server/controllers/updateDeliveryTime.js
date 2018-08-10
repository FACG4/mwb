const update = require('../model/queries/update');

const updateDeliveryTime = (req, res) => {
  const { newDeliveryTime } = req.body;
  const id = req.body.orderId;

  update.updateDeliveryTime(newDeliveryTime, id, (cb) => {
    res.send({ data: cb });
  });
};

module.exports = { updateDeliveryTime };
