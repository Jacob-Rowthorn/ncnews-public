const db = require(`../db/connection.js`);

function selectArticles() {
    const query = `
    SELECT
        articles.author,
            (
                SELECT
                COUNT(comments.comment_id) AS comment_count
                FROM comments
                WHERE comments.article_id = articles.article_id 
            ),
        articles.title,
        articles.created_at,
        articles.topic,
        articles.article_id,
        articles.votes
    FROM articles
    ORDER BY articles.created_at DESC
    `
    return db.query(query).then((res) => {
        return res.rows
    })
}

module.exports = {selectArticles}