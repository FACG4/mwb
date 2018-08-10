const select = require('../model/queries/select');

const getAllOrders = (req, res) => {
  select.selecAllOrders((cb) => {
    console.log(cb);
    res.send({ data: cb });
  });
};

module.exports = { getAllOrders };
