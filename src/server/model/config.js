require('env2')('./config.env');

module.exports = () => {
  const {
    NODE_ENV, TEST_DB, PRODUCTION_DB,
  } = process.env;

  switch (NODE_ENV) {
    case 'test': return TEST_DB;
    case 'production': return PRODUCTION_DB;
    default: return PRODUCTION_DB;
  }
};
