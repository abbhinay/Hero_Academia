require('dotenv').config();
const express = require('express');
const app = express();
const { MD5 } = require('crypto-js');

const public_key = process.env.Public_Key;
const private_key = process.env.Private_Key;

app.get('/', (req, res) => {
  const timestamp = new Date().getTime().toString();
  console.log(MD5(timestamp, private_key, public_key).toString());
  return res.status(200).json({
    status: 'success',
  });
});

app.listen(5000, () => console.log('server is running'));
