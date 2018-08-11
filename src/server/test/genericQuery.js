const tape = require('tape');
const query = require('./../model/queries/genericQuery');

tape('testing the query function for the command "insert" on the users table', (t) => {
  const req = {
    body: {
      fullName: 'farah',
      password: 'Zxuc%gy#nnis5tvaren&',
      mobileNumber: '561516518',
      address: 'some address',
      tillNumber: '256adf548wew3',
    },
  };
  const insert = {
    text: 'INSERT INTO users (full_name, password, mobile_number, address, till_number) values ($1, $2, $3, $4, $5)',
    values: [req.body.fullName, req.body.password, req.body.mobileNumber,
      req.body.address, req.body.tillNumber],
  };
  query(insert)
    .then((res) => {
      t.equal(res.rowCount, 1, 'there should be one row in the users table');
      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});
