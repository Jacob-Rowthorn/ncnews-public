const db = require(`../db/connection.js`);

function selectTopics() {
    const query = `
    SELECT * FROM topics
    `
    return db.query(query).then((res) => {
        return res.rows
    })
}

module.exports = {selectTopics}