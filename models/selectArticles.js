const db = require(`../db/connection.js`);

function selectArticles() {
    let query = `
    SELECT * FROM topics
    `
    return db.query(query).then((res) => {
        return res.rows
    })
}

module.exports = {selectArticles}