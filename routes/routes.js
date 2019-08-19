// var express = require('express');
// var router = express.Router();
var path = require('path');

/* GET home page. */
module.exports = function(app) {
  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/files/index.html"))
  });
};