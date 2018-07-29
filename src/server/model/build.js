const connection = require('./connection');

// init abstract query function

const query = (sql)=> new Promise((resolve,reject)=>{
    connection.query( sql, (err, res ) => {
        if (err) {
            reject(err);
        }else {
            resolve(res);
        }
    });
});

