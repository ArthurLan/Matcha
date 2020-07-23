const { createDb, dropTable } = require('./app/helpers/db_init/createDb');
const { createTableUser, createTableInterest, createTableBlock, createTableMatch, createTableMessage } = require('./app/helpers/db_init/createTables');

// createDb('matcha');
dropTable('user');
createTableUser();
// createTableInterest();
// createTableBlock();
// createTableMatch();
// createTableMessage();