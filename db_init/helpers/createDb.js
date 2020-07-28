// const sql = require('../../config/db.js');

const sql = require("../db.js");

function createDb(dbName) {
    console.log(`Creating Db with name ${dbName}...`);
    sql.query(`CREATE DATABASE ${dbName}`, (error, results, fields) => {
        if (error) throw error;
        console.log(`Database created ${dbName}`);
    })
};

function dropTable(tableName) {
    console.log(`Deleting table ${tableName}...`);
    sql.query(`DROP TABLE ${tableName}`, (error, results, fields) => {
        if (error) throw error;
        console.log(`Deleted table ${tableName}.`);
    })
};



module.exports = { createDb, dropTable };