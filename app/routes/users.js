var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function userList(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
