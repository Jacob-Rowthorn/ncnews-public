const express = require('express');
const app = express();
const {getNewsData} = require(`./controllers/get.js`)

app.get(`/api/topics`, getNewsData)

module.exports = app