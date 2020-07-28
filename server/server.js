const express = require('express');
var cors = require('cors');


const app = express();
app.use(cors());

// Allows to get the data in req.body
app.use(express.json({ extend: false }));

const PORT = process.env.PORT || 5000;


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to matcha-server." });
});


require("./app/routes/user.routes.js")(app);

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});

