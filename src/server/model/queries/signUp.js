const bcrypt = require('bcrypt');
const signUpQuery = require('./genericQuery');

module.exports = (req) => {
  const {
    fullName, password, mobileNumber, address, tillNumber,
  } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return console.log('hasing error');
    const sql = {
      text: 'INSERT INTO users (full_name, password, mobile_number, address, till_number) VALUES($1, $2, $3, $4, $5)',
      values: [fullName, hash, mobileNumber, address, tillNumber],
    };
    return signUpQuery(sql)
      .then((response) => {
        console.log(response.rowCount);
        if (response.rowCount === 1) return 'signup successful';
        return 'Something went wrong when registering your information, please try again';
      })
      .catch(error => console.log('signUpQuery server error', error));
  });
};
