const express = require('express');
const sql = require('./config/db.js');
const select_ft = require('./helpers/db_ft/select_ft');

const app = express();


// Allows to get the data in req.body
app.use(express.json({ extend: false }));

const PORT = process.env.PORT || 5000;

// Define Routes
app.use("/user", require("./routes/user"));


// sql.query('select * from mysql.db', (error, results, fields) => {
//     console.log(results)
// })

console.log(select_ft('mysql'))

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});

