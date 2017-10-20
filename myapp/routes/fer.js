var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('OLI', { title: 'Fer' });
  res.send("Fer");
});

module.exports = router;
