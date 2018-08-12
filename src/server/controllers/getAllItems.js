const dbQuery = require('../model/queries/genericQuery');

const getAllItems = (req, res) => {
  const sql = 'select title, id, image from items;';
  dbQuery(sql)
    .then((result) => {
      res.send({ data: result.rows });
    })
    .catch(err => res.send({ message: 'server error', body: err }));
};
module.exports = { getAllItems };
