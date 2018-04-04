var express = require('express');

var email = require('./routes/email_author');

var app = express();

app.use('/email_author', email);

app.get('/', function(req, res) {
  res.send('Home');
})


app.listen(3000, function() {
  console.log('ergfefwdwq');
})

module.exports = app;
