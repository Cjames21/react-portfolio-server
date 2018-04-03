var express = require('express');
var router = express.Router();

router.post('/send_mail', function(req, res) {
  console.log(req);
  res.send(req);
});

module.exports = router;
