const express = require("express");
const router = express.Router();

// @route       GET /user
// @desc        Get all users
// @access      Public
router.get('/', async (req, res) => {
    res.json({users : ['mikel', 'Arthur']});
});

module.exports = router;