require('dotenv').config();
const express = require('express');
const app = express();
const { MD5 } = require('crypto-js');
const axios = require('axios');

const public_key = process.env.Public_Key;
const private_key = process.env.Private_Key;

const getData = async (req, res, next) => {
  const timestamp = new Date().getTime().toString();
  const str = timestamp + private_key + public_key;
  const hash = MD5(str).toString();
  let response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=75737056736c29d701a9ea7d7edeb778&hash=${hash}&name=iron%20man`
  );
  //console.log(response.data.data.results[0].thumbnail.path);
  res.send(`<img src="${response.data.data.results[0].thumbnail.path}.jpg" />`);
  next();
};

app.get('/', getData, (req, res) => {
  //   return res.status(200).json({
  //     status: 'success',
  //   });
});

app.listen(5000, () => console.log('server is running'));
