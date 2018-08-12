const dbQuery = require('../model/queries/genericQuery');

const getAllOrders = (req, res) => {
  const sql = 'select i.title, o.id, o.quantity, o.status, o.delivery_time, i.image from orders o inner join items i on o.item_id=i.id;';
  dbQuery(sql)
    .then((result) => {
      res.send({ data: result.rows });
    })
    .catch(err => res.send({ message: 'server error', body: err }));
};

module.exports = { getAllOrders };
