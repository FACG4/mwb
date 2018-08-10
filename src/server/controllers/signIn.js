const bcrypt = require('bcrypt');
const dbQuery = require('../model/queries/genericQuery');

module.exports = (req, res) => {
  const { fullName, password, keepLogin } = req.body;
  const sql = {
    text: 'SELECT * FROM users WHERE full_name = $1',
    values: [fullName],
  };
  dbQuery(sql).then((result) => {
    console.log('response', result.rows);
    if (result.rows.length === 0) return res.send({ message: 'Invalid username or password' });
    if (result.rows[0].full_name !== fullName) return res.send({ message: 'Invalid username or password' });
    return bcrypt.compare(password, result.rows[0].password).then((comparison) => {
      if (!comparison) {
        res.clearCookie('session', { httpOnly: true, signed: true })
        return res.send({ message: 'invalid username or password' });
      }
      if (comparison) {
        if (keepLogin === 'on') {
          res.cookie(
            'session',
            {
              username: result.rows[0].full_name,
              loggedIn: true,
            },
            {
              httpOnly: true,
              signed: true,
              maxAge: 999999999999999,
            },
          );
        }
        if (keepLogin !== 'on') {
          res.cookie(
            'session',
            {
              name: result.rows[0].full_name,
              loggedIn: true,
            },
            {
              httpOnly: true,
              signed: true,
            },
          );
        }
      }
      return res.send({ message: 'login successful' });
    }).catch(comparisonError => console.log(comparisonError));
  }).catch(err => console.log(err));
};
