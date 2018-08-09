const select = require('../model/queries/select');


const getAllItems = (req, res) => {
  select.getAllItems((cb) => {
    res.send({ data: cb });
  });
};


module.exports = { getAllItems };
