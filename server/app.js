require('dotenv').config();
const express = require('express');
const app = express();
//const cors = require('cors');
const searchComics = require('./routes/searchComics');
const autocomplete = require('./routes/autocomplete');
const searchCharacter = require('./routes/searchCharacter');

//app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  ); // allowed actiosn
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // to deal with chrome sending an extra options request
  }

  next(); // call next middlewer in line
});

app.use('/api/search', searchComics);
app.use('/api/autocomplete', autocomplete);
app.use('/api/character', searchCharacter);

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
  });
});

app.listen(5000, () => console.log('server is running'));
