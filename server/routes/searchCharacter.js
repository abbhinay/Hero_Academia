const express = require('express');
const router = express.Router();
const { MD5 } = require('crypto-js');
const axios = require('axios');

const public_key = process.env.Public_Key;
const private_key = process.env.Private_Key;

const getData = async (req, res, next) => {
  const timestamp = new Date().getTime().toString();
  const str = timestamp + private_key + public_key;
  const hash = MD5(str).toString();
  const { id } = req.params;
  console.log(id);
  let response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&apikey=75737056736c29d701a9ea7d7edeb778&hash=${hash}`
  );

  const { name, description, thumbnail } = response.data.data.results[0];
  let character = {
    id: response.data.data.results.id,
    name,
    description,
    thumbnail,
  };

  res.json(character);
  next();
};

router.get('/:id', [getData], (req, res) => {});

module.exports = router;
