Promise.resolve()
  .then(require('../model/db_build'))
  .then(require('./genericQuery'));
