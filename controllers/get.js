const {selectArticles} = require(`../models/selectArticles.js`);

function getNewsData (req, res, next) {
    selectArticles().then((articles) => {
        res.status(200).send(articles);
    }).catch((err) => {
        next(err)
    })
}

module.exports = {getNewsData}