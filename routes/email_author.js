var express = require('express');
var app = express();
var nodemailer = require('nodemailer');


app.post('/', function(req, res) {
  console.log(req);
  res.send(req);
});
