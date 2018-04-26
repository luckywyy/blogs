var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/writeBlog', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/writeBlog.html'));
});

module.exports = router;
