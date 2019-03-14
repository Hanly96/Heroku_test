var express = require('express');
var router = express.Router();

const data = require(`../data.js`);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: "Welcome to Node with Heroku" });
});
//copy 上面的
router.get('/:user', function(req, res, next) {
  console.log("data:",data);
  console.log("user:",req.params.user);
  res.render('userpage',data[req.params.user]);
});

module.exports = router;
