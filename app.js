var express = require('express');

var email = require('./routes/email_author');

var app = express();

app.use('/email_author', email);

app.get('/', function(req, res) {
  res.send('Home');
})

var port = process.env.PORT || 3000;
app.listen(port, function(req, res) {
  console.log('Listening ' + port + '!');
})

module.exports = app;
