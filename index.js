import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import getChannels from './models/channels.js';
import getTarget from './models/targets.js';
import { getToken, updateToken } from './models/token.js';
import express from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/channels', async (req, res) => {
  if (isAuthorized(req)) {
    getChannels(res);
  } else {
    res.send('Not authorized');
  }
});

app.get('/target', async (req, res) => {
  if (isAuthorized(req)) {
    getTarget(req, res);
  } else {
    res.send('Not authorized');
  }
});

app.get('/token', async (req, res) => {
  if (isAuthorized(req)) {
    getToken(res);
  } else {
    res.send('Not authorized');
  }
});

app.post('/token', async (req, res) => {
  if (isAuthorized(req)) {
    updateToken(req, res);
  } else {
    res.send('Not authorized');
  }
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log('RESTful API server started on: ' + port);
});

const isAuthorized = (req) => {
  return req.headers.secret === process.env.SECRET;
};
