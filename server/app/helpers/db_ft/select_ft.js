const sql = require('../../config/db.js');

function select_ft() {
    sql.query('select * from mysql.db', (error, results, fields) => {
        return typeof (results)
    })
}

module.exports = select_ft;