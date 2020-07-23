const sql = require("../../models/db");



function createTableUser() {
    console.log(`Creating table user...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS user (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                firstname varchar(255) NOT NULL,
                lastname varchar(255) NOT NULL,
                gender varchar(30) NOT NULL,
                bio varchar(400) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table user created.`);
        })
};

function createTableInterest() {
    console.log(`Creating table interest...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS interest (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                user_id int(11) NOT NULL,
                name varchar(255) NOT NULL,
                continname varchar(255) NOT NULL
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table interest created.`);
        })
};

function createTableBlock() {
    console.log(`Creating table block...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS block (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                user_id int(11) NOT NULL,
                blocked_user_id int(11) NOT NULL
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table block created.`);
        })
};
function createTableMatch() {
    console.log(`Creating table match...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS matc (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                user_id int(11) NOT NULL,
                blocked_user_id int(11) NOT NULL
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table match created.`);
        })
};


function createTableMessage() {
    console.log(`Creating table message...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS message (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                user_id_one int(11) NOT NULL,
                user_id_two int(11) NOT NULL
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table message created.`);
        })
};


module.exports = { createTableUser, createTableInterest, createTableBlock, createTableMatch, createTableMessage };