/*eslint-disable*/
const select = require('../model/queries/select');

const getAllOrders = (req, res) => {

const userId =  req.body.userId;

  select.selecAllOrders(userId, (err, result) => {
    if (err) return res.json({ status: false, error: err });
    res.send({
      data: result,
    });
  });
};

module.exports = {
  getAllOrders,
};
