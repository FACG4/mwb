const tape = require('tape');
const query = require('../src/server/model/queries/genericQuery');

tape('testing the query function for the command "insert" on the users table', (t) => {
  const req = {
    body: {
      username: 'farah',
      password: 'Zxuc%gy#nnis5tvaren&',
      email: 'farah',
      phone: '561516518',
      address: 'some address',
      mPesa: '256adf548wew3',
    },
  };
  const insert = {
    text: 'INSERT INTO users (username, email, password, phone, address, m_pesa) values ($1, $2, $3, $4, $5, $6)',
    values: [req.body.username, req.body.email, req.body.password, req.body.phone,
      req.body.address, req.body.mPesa],
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
