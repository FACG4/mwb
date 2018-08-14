const { validateSignUp } = require('../helpers/validation');
const signUp = require('../model/queries/signUp');
const { validateUnique } = require('../model/queries/validateUnique');

module.exports = (req, res) => {
  // checks out that all information is in a valid format and that it does not
  // already exist in the database before inserting the values.


  console.log('this is validate signup', validateSignUp(req));
  validateUnique(req).then(async (result) => {
    const sign = await signUp(req)
    await console.log(result);
    console.log('signup', sign);
  });
  // if (validateSignUp(req) === 'input is valid') {
  //   res.send({ message: validateUnique(req, signUp(req)) });
  // } else {
  //   res.send({ message: validateUnique(req, signUp(req)) });
  // }
};
