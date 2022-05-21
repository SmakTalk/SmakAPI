const bodyParser = require('body-parser');
const { getChannels } = require('./models/channels');

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get('/channels', async (req, res) => {
    getChannels(res);
  });

  app.get('/', (req, res) => {
    res.send('Hello world!');
  });

app.listen(port);

console.log('RESTful API server started on: ' + port);