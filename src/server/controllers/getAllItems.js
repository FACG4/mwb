const select = require('../model/queries/select');

const getAllItems = (req, res) => {
  select.getAllItems((cb) => {
    console.log(cb);
    res.send({ data: cb });
  });
};
module.exports = { getAllItems };
