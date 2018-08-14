const dbQuery = require('../model/queries/genericQuery');

const getAllOrders = (req, res) => {
<<<<<<< HEAD
  const sql = 'select i.title, o.id, o.quantity, o.status, o.delivery_time, i.image from orders o inner join items i on o.item_id=i.id;';
  dbQuery(sql)
    .then((result) => {
      res.send({ data: result.rows });
    })
    .catch(err => res.send({ message: 'server error', body: err }));
=======
  select.selecAllOrders((err, result) => {
    if (err) return res.json({ status: false, error: err });
    res.send({
      data: result,
    });
  });
>>>>>>> fcb82b2348ecdc743f504fe0f8b1729b046acb0d
};

module.exports = {
  getAllOrders,
};
