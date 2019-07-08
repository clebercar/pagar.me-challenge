const request = require('supertest')
const app = require('../../../src/app')
const factory = require('../../factories')

describe('User Controller', () => {
  describe('POST Create', () => {
    let userAttrs
    let response

    beforeEach(async () => {
      userAttrs = await factory.attrs('User')

      response = await request(app)
        .post('/api/v1/users')
        .send(userAttrs)
    })

    it('should return an users created', async () => {
      expect(typeof response.body).toBe('object')
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })
  })
})
