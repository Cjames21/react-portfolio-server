const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


/* This will eventually be a post method that sends me an email once I get this script set up */
router.get('/', function(req, res, next) {
  var responseMessage = "Response: <br />";
  for(data of req.body) {
    responseMessage += data + " <br />";
  }
  console.log(responseMessage);
  res.send(responseMessage);
});

module.exports = router;
