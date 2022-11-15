exports.articleData = require('./articles.js');
exports.commentData = require('./comments.js');
exports.topicData = require('./topics.js');
exports.userData = require('./users.js');

const fullArticle = {articleData, commentData, topicData, userData};

module.exports = fullArticle