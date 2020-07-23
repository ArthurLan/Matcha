// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host     : '192.168.99.100',
//     user     : 'root',
//     password : 'secret',
// });

// connection.connect(function(err) {
//     if (err) throw err
//     console.log('You are now connected with mysql database...')
// });

// module.exports = connection;
module.exports = {
    HOST: '192.168.99.100',
    USER: "root",
    PASSWORD: 'secret',
    DB: "matcha"
};