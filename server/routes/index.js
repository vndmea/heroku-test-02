var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  return res.send('hello express, again!');
});

module.exports = router;
