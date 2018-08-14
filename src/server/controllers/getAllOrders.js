const select = require('../model/queries/select');

const getAllOrders = (req, res) => {
  select.selecAllOrders((err, result) => {
    if (err) return res.json({ status: false, error: err });
    res.send({
      data: result,
    });
  });
};

module.exports = {
  getAllOrders,
};
