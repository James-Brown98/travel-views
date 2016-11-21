var express = require('express');
var router = express.Router();
var addMarker = require('../db/db').addMarker()

router.get('/', function(req, res) {
  res.render('users', addMarker)
});


module.exports = router;
