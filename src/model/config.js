require('env2')('./config.env');

module.exports = () => {
  const {
    NODE_ENV, CURRENT_USED_DB, TEST_DB, DB_URL, PRODUCTION_DB,
  } = process.env;


  switch (NODE_ENV) {
    case 'test': return TEST_DB; break;
    case 'development': return DB_URL; break;
    case 'production': return PRODUCTION_DB; break;
    default: return DB_URL;
  }
  console.log(NODE_ENV);
};
