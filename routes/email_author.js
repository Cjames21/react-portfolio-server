var express = require('express');
var router = express.Router();


/* This will eventually be a post method that sends me an email once I get this script set up */
router.get('/', function(req, res, next) {
  res.send('Email');
});

module.exports = router;
