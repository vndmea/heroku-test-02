var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  return res.sendFile('index.html')
});

module.exports = router;
