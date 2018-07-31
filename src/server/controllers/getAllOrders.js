const select = require('../model/queries/select');


const getAllOrders = (req, res) => {
  console.log('I am inside getAllOrders');


  select.selecAllOrders((cb) => {
    console.log(cb);
    res.send({ data: cb });
  });
};


module.exports = { getAllOrders };
