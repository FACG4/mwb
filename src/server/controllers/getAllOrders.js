const select = require('../model/queries/select');

<<<<<<< HEAD

exports.get = (req, res) => {
=======
const getAllOrders = (req, res) => {
>>>>>>> d1c3769c8df4ca921c823d2113319cefacba71f6
  select.selecAllOrders((cb) => {
    res.send({ data: cb });
  });
};
<<<<<<< HEAD
=======

module.exports = { getAllOrders };
>>>>>>> d1c3769c8df4ca921c823d2113319cefacba71f6
