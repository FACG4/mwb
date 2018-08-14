const dbQuery = require('./genericQuery');

const validateUnique = (req) => {
  const { fullName, mobileNumber, tillNumber } = req.body;
  return dbQuery({
    text: 'SELECT * FROM users WHERE full_name = $1 OR mobile_number = $2 OR till_number = $3',
    values: [fullName, mobileNumber, tillNumber],
  })
    .then((result) => {
      if (result.rows.length > 0) {
        if (result.rows[0].full_name === fullName) return `The username ${fullName} is already registered in Market without Borders`;
        if (result.rows[0].mobile_number === mobileNumber) return 'This mobile number is already registered in Market without Borders';
        if (result.rows[0].till_number === tillNumber) return 'This till number is already registered in Market without Borders';
      }
      return 'input is unique';
    })
    .catch(err => console.log(err));
};

module.exports = { validateUnique };
