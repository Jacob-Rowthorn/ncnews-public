const {selectArticles} = require(`../models/selectArticles.js`);

function getTopics (req, res, next) {
    selectArticles().then((articles) => {
        res.status(200).send(articles);
    }).catch((err) => {
        next(err)
    })
}

module.exports = {getTopics}