const {expect} = require('chai')
const {describe, it, before, after} = require('mocha')
const request = require('request')
const createApp = require('../create-app.js')

describe('tests .get()', () => {
  const app = createApp()
  before(done => {
    server = app.listen(3000, () => {
      done()
    })
  })

  after(done => {
    server.close(() => {
      done()
    })
  })

  describe('GET /', () => {

    it('responds with "Hello, World!"', done => {
      request('http://localhost:3000', (err, response, body) => {
        expect(err).to.equal(null)
        expect(response.statusCode).to.equal(200)
        expect(body).to.be.an('string')
        done()
      })
    })

  })
})
