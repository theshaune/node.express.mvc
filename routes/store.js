var express = require('express');
var router = express.Router();

/* GET store page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Store index.' });
});

module.exports = router;