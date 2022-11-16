const db = require(`../db/connection.js`);

function selectArticles() {
    const query = `
    SELECT
        users.username AS author,
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
    INNER JOIN users
        ON articles.author = users.username
    INNER JOIN comments
        ON articles.article_id = comments.comment_id
    ORDER BY articles.created_at DESC
    `
    return db.query(query).then((res) => {
        return res.rows
    })
}

module.exports = {selectArticles}