var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  var testreq = url.parse(req.originalUrl,true).query.testreq;
  console.log(testreq);
  if(testreq == 0){
    next('route');
  }
  else
    next();
},function(req,res,next){
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/',function(req,res,next){
  res.send('0');
});


module.exports = router;
