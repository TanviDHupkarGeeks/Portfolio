#!/usr/bin/node

var express = require('express');
var app = express();
var PORT = '3001';

app.use(express.static(__dirname + '/docs'));
app.listen(PORT);
console.log(`Working on ${PORT}`);
