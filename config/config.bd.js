const mySql = require('mysql');
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

