const bcrypt = require('bcrypt');
const dbQuery = require('../model/queries/genericQuery');

module.exports = (req, res) => {
  const {
    fullName, password, mobileNumber, address, tillNumber,
  } = req.body;
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
