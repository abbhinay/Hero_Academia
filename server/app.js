require('dotenv').config();
const express = require('express');
const app = express();
const searchComics = require('./routes/searchComics');
const autocomplete = require('./routes/autocomplete');
const searchCharacter = require('./routes/searchCharacter');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/search', searchComics);
app.use('/api/autocomplete', autocomplete);
app.use('/api/character', searchCharacter);

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
  });
});

app.listen(5000, () => console.log('server is running'));
