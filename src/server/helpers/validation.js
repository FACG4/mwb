const { regexNumber, nameRegex } = require('../helpers/regexTester');

const validateSignUp = (req) => {
  const {
    fullName, mobileNumber,
  } = req.body;
  if (fullName === '') return 'Please enter your Full Name here';
  if (nameRegex(fullName) === false) return 'Please enter both your first name and last name';
  if (regexNumber(mobileNumber) === false) return 'mobileNumber must be a number';
  return 'input is valid';
};

module.exports = { validateSignUp };
