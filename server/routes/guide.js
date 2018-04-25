var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/blog.html'));
});
router.get('/readBlog', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/blog.html'));
});
router.get('/findBlog', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/welcome.html'));
});

module.exports = router;
