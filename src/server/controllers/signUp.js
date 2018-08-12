const bcrypt = require('bcrypt');
const dbQuery = require('../model/queries/genericQuery');
const { regexNumber, nameRegex } = require('../helpers/regexTester');

module.exports = (req, res) => {
  const {
    fullName, password, mobileNumber, address, tillNumber,
  } = req.body;
  if (fullName === '') return res.send({ message: 'Please enter your Full Name here' });
  if (nameRegex(fullName) === false) return res.send({ message: 'Please enter both your first name and last name' });
  if (regexNumber(mobileNumber) === true) return res.send({ message: 'mobileNumber must be a number' });
  dbQuery({
    text: 'SELECT * FROM users WHERE full_name = $1',
    values: [fullName],
  }).then((result) => {
    if (result.rows.length > 0) return res.send({ message: `the name ${fullName} is already registered` });
    return bcrypt.hash(password, 10, (err, hash) => {
      const sql = {
        text: 'INSERT INTO users (full_name, password, mobile_number, address, till_number) VALUES($1, $2, $3, $4, $5)',
        values: [fullName, hash, mobileNumber, address, tillNumber],
      };
      dbQuery(sql).then((response) => {
        if (response.rowCount === 1) res.send({ message: 'signup successful' });
      }).catch((error) => {
        console.log(error);
      });
    });
  }).catch(err => console.log(err));
};
