const express = require('express');
const app = express();
const {getTopics, getArticles} = require(`./controllers/get.js`)

app.get(`/api/topics`, getTopics);
app.get(`/api/articles`, getArticles);

app.use((err, req, res, next) => {
    if (err.status && err.message) {
        res.status(err.status).send(err.message)
    }
    next(err)
})

app.use((err, req, res, next) => {
    res.status(500).send({message: `internal error`})
})

module.exports = app
