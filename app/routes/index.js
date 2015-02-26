var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Express' }, function(err, html) {
    res.render('template', {content: html}, function(err, html) {
      res.send(html);
    });
  });
});

module.exports = router;
