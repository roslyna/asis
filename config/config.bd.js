/*const mySql = require('mysql');
let connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sportgoods_shop'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error occurred while connecting with database")
    }
});

//module.exports = connection;
 */

const mySql = require('mysql');
let connection = mySql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sportgoods_shop'
});

connection.getConnection(function (err, connection) {
    if (err) {
        console.log("Error occurred while connecting with database");
    } else {
        console.log("Database is connected");
    }
});

module.exports = connection;
