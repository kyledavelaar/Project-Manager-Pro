var express = require('express');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/api/puppies', db.getAllPuppies);
// router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/createUser',(req,res,next) => {console.log('DB.CREATEUSER', db.createUser); next();} ,db.createUser);
// router.put('/api/puppies/:id', db.updatePuppy);
// router.delete('api/puppies/:id', db.removePuppy); 

module.exports = router;
