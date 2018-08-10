const bcrypt = require('bcrypt');
const dbQuery = require('../model/queries/genericQuery');

module.exports = (req, res) => {
  const {
    fullName, password, mobileNumber, address, tillNumber,
  } = req.body;

  dbQuery({
    text: 'SELECT * FROM users WHERE full_name = $1',
    values: [fullName],
  }).then((result) => {
    if (result.rows.length !== 0) return res.send({ message: `the name ${fullName} is already registered` });
  }).catch(err => console.log(err));

  bcrypt.hash(password, 10, (err, hash) => {
    const sql = {
      text: 'INSERT INTO users (full_name, password, mobile_number, address, till_number) VALUES($1, $2, $3, $4, $5)',
      values: [fullName, hash, mobileNumber, address, tillNumber],
    };
    dbQuery(sql).catch((error) => {
      console.log(error);
    });
  });
};
