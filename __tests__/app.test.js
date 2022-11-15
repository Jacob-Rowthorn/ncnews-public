const request = require(`supertest`);
const app = require(`../app.js`);
const seed = require(`../db/seeds/seed.js`);
const db = require(`../db/connection.js`);
const testData = require(`../db/data/test-data/index.js`)
const { TestWatcher } = require("jest");

beforeEach(() => {
    return seed(testData)
})

afterAll(() => {
    return db.end()
})

describe (`/api/topics`, () => {
    test(`GET - 200: returns an array of objects`, () => {
        return request(app)
            .get(`/api/topics`)
            .expect(200)
            .then((res) => {
                expect(Array.isArray(res.body)).toEqual(true);
            })
    })

    test(`GET - 200: objects contain keys for slug and description`, () => {
        return request(app)
            .get(`/api/topics`)
            .expect(200)
            .then((res) => {
                res.body.forEach((topic) => {
                    expect(topic).toMatchObject({
                        slug: expect.any(String),
                        description: expect.any(String)
                    })
                })
            })
    })

    test(`GET - 200: keys refer to accurate information`, () => {
        return request(app)
            .get(`/api/topics`)
            .expect(200)
            .then((res) => {
                expect(res.body).toEqual([
                    {
                      description: 'The man, the Mitch, the legend',
                      slug: 'mitch'
                    },
                    {
                      description: 'Not dogs',
                      slug: 'cats'
                    },
                    {
                      description: 'what books are made of',
                      slug: 'paper'
                    }
                  ]);
            })
    })

    test(`GET - 404: invalid paths return nothing`, () => {
        return request(app)
            .get(`/api/oifjweiofjawoeif`)
            .expect(404);
    })
})