var express = require('express');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/createUser',(req,res,next) => {console.log('DB.CREATEUSER', db.createUser); next();} ,db.createUser);


module.exports = router;
