Promise.resolve()
  .then(require('../src/server/model/db_build'))
  .then(require('./genericQuery'));
