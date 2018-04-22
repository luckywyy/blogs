var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/readBlog', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
