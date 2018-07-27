const dbConnection = require("./db_connect");
const fs = require("fs");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
const dbBuild = cb => {
  dbConnection.query(sql, (err, res) => {
    if (err) {
       return cb(err);
    }
        cb(null, res)

  });
};

module.exports = dbBuild;
