
const update = require('../model/queries/update');


const updateDeliveryTime = (req, res) => {
  const newDeliveryTime = req.body.newDeliveryTime;
  const id = req.body.orderId;

  update.updateDeliveryTime(newDeliveryTime, id, (cb) => {
    console.log(cb);
    res.send({ data: cb });
  });
};


module.exports = { updateDeliveryTime };
