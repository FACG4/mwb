const select = require('../model/queries/select');

const getAllItems = (req, res) => {
  select.getAllItems((err, result) => {
    if (err) return console.log('in getting all items: ', err);
    console.log(result);
    res.send({
      data: result,
    });
  });
};
module.exports = {
  getAllItems,
};
