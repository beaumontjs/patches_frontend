'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile('public/index.html' , { root : __dirname});
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = app;
