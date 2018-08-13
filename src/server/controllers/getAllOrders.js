const select = require('../model/queries/select');

const getAllOrders = (req, res) => {
  select.selecAllOrders((err, result) => {
    if (err) return console.log('in getting all orders: ', err);
    console.log(result);
    res.send({
      data: result,
    });
  });
};

module.exports = {
  getAllOrders,
};
