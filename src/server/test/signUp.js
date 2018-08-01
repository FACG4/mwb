const tape = require('tape');
const query = require('./../model/queries/genericQuery');
const superTest = require('supertest');

tape('signUp validation', (t) => {
  const req = {
    body: {
      username: '',
      password: 'Zxuc%gy#nnis5tvaren&',
      email: 'farahfghf',
      phone: '5615165185',
      address: 'some address',
      mPesa: '256adf548hgkkwew3',
    },
  };
  const { username, password, email, phone, address, mPesa } = req.body;
  const sql = {
    text: 'INSERT INTO users (username, password, email, phone, address, m_pesa) VALUES($1, $2, $3, $4, $5, $6)',
    values: [username, password, email, phone, address, mPesa],
  };
      query(sql)
      .then((res) => {
        t.equal(res.rowCount, 1, 'all fields must be filled ');
        t.end();
      })
      .catch((err) => {
        t.error(err);
        t.end();
      });
});
