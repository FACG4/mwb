const update = require('../model/queries/update');

const updateSeenValue = (req, res) => {
  const ids = req.body.ids;

  update.updateSeenValue(ids, (cb) => {
    res.send({ data: cb });
  });
};

module.exports = { updateSeenValue };
