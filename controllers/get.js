const {selectTopics} = require(`../models/selectTopics.js`);

function getTopics (req, res, next) {
    selectTopics().then((resTopics) => {
        res.status(200).send({topics: resTopics});
    }).catch((err) => {
        next(err)
    })
}

module.exports = {getTopics}