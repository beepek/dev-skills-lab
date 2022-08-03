var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/accounts', function(req, res, next) {
  res.send('Users Routes function!');
});

module.exports = router;