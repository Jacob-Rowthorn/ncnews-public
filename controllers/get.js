const {selectTopics} = require(`../models/selectTopics.js`);
const {selectArticles} = require(`../models/selectArticles.js`)

function getTopics (req, res, next) {
    selectTopics().then((resTopics) => {
        res.status(200).send({topics: resTopics});
    }).catch((err) => {
        next(err)
    })
}

function getArticles (req, res, next) {
    selectArticles().then((resArticles) => {
        res.status(200).send({articles: resArticles});
    }).catch((err) => {
        next(err)
    })
}

module.exports = {getTopics, getArticles}