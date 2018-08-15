require('env2')('./config.env');

module.exports = () => {
  const {
    NODE_ENV, TEST_DB, PRODUCTION_DB, DB_URL,
  } = process.env;
  console.log(NODE_ENV, TEST_DB, PRODUCTION_DB, DB_URL);

  switch (NODE_ENV) {
    case 'test': return TEST_DB;
    case 'production': return PRODUCTION_DB;
    case 'development': return DB_URL;
    default: return DB_URL;
  }
};
