var express = require('express');
var router = express.Router();

const data = require('../data');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'THIS IS WHAT SUCCESS LOOK LIKE ', 
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
  homeBanner:"banner.jpg" });
  
});

//copy 
router.get('/', function(req, res, next) {
  console.log("user:",data[req.params.user]);
  res.render('userpage',data[req.params.user]);
});

module.exports = router;
