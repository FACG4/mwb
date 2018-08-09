const select = require('../model/queries/select');


exports.get = (req, res) => {
  select.selecAllOrders((cb) => {
    res.send({ data: cb });
  });
};
