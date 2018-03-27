var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');

  res.json([{
    id: 1,
    username: "cjames122"
  }, {
    id: 2,
    username: "wefwfwfwfw"
  }]);
});

module.exports = router;
