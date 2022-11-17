const request = require(`supertest`);
const app = require(`../app.js`);
const seed = require(`../db/seeds/seed.js`);
const db = require(`../db/connection.js`);
const testData = require(`../db/data/test-data/index.js`);

beforeEach(() => {
    return seed(testData)
})

afterAll(() => {
    return db.end()
})

describe (`/api/topics`, () => {
    test(`GET - 200: objects exist and contain keys for slug and description`, () => {
        return request(app)
            .get(`/api/topics`)
            .expect(200)
            .then((res) => {
                expect(res.body.topics.length).toBe(3);
                res.body.topics.forEach((topic) => {
                    expect(topic).toMatchObject({
                        slug: expect.any(String),
                        description: expect.any(String)
                    })
                })
            })
    })

    test(`GET - 404: invalid paths return nothing`, () => {
        return request(app)
            .get(`/api/oifjweiofjawoeif`)
            .expect(404);
    })
})

describe (`/api/articles`, () => {
    test(`GET - 200: articles contain all proper fields`, () => {
        return request(app)
            .get(`/api/articles`)
            .expect(200)
            .then((res) => {
                expect(res.body.articles.length).toBe(12);
                res.body.articles.forEach((article) => {
                    expect(article).toMatchObject({
                        author: expect.any(String),
                        title: expect.any(String),
                        article_id: expect.any(Number),
                        topic: expect.any(String),
                        created_at:expect.any(String),
                        votes: expect.any(Number),
                        comment_count: expect.any(String)
                    })
                })
            })
    })

    test(`GET - 200: articles are sorted by date`, () => {
        return request(app)
            .get(`/api/articles`)
            .expect(200)
            .then((res) => {
                expect(res.body.articles).toBeSortedBy('created_at', {descending: true})
            })
    })
})