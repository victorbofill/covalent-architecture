const express = require('express');
const app = express();
const path = require('path');
const errorHandler = require('./utils/error-handler');
const morgan = require('morgan');

const dropbox = require('./apis/dropbox/dropbox');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/../public')));
app.use(express.json());

app.use('/api/dropbox', dropbox);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.use(errorHandler());

module.exports = app;
