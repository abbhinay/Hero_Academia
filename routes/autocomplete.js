const express = require('express');
const router = express.Router();
const { MD5 } = require('crypto-js');
const axios = require('axios');

const public_key = process.env.Public_Key;
const private_key = process.env.Private_Key;

const autocomplete = async (req, res, next) => {
  const timestamp = new Date().getTime().toString();
  const str = timestamp + private_key + public_key;
  const hash = MD5(str).toString();
  const { name } = req.params;
  console.log(name);

  let response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=75737056736c29d701a9ea7d7edeb778&hash=${hash}&nameStartsWith=${name}`
  );

  if (response.data.code === 200) {
    let obj = response.data.data.results.map((result) => {
      const temp = {
        id: result.id,
        name: result.name,
        path: result.thumbnail,
      };
      return temp;
    });

    console.log(obj);
    res.json(obj);
  } else {
    res.status(400).json({
      error: 'true',
    });
  }

  next();
};

router.get('/:name', autocomplete, (req, res) => {});

module.exports = router;
