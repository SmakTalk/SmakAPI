require('dotenv').config();
const bodyParser = require('body-parser');
const { getChannels } = require('./models/channels');

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/channels', async (req, res) => {
  if (isAuthorized(req)) {
    getChannels(res);
  } else {
    res.send('Not authorized');
  }
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port);

const isAuthorized = (req) => {
  return req.headers.secret === process.env.SECRET;
};

console.log('RESTful API server started on: ' + port);