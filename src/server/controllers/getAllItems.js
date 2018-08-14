const dbQuery = require('../model/queries/genericQuery');

const getAllItems = (req, res) => {
  select.getAllItems((err, result) => {
    if (err) return res.json({ status: false, error: err });
    res.send({
      data: result,
    });
  });
};
module.exports = {
  getAllItems,
};
