const request = require('supertest')
const app = require('../../../src/app')
const factory = require('../../factories')

describe('Payable Controller', () => {
  let user

  beforeAll(async () => {
    user = await factory.create('User')
  })

  describe('GET Balances', function () {
    let response

    beforeEach(async () => {
      response = await request(app)
        .get('/api/v1/payables/balances')
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return balances of user', () => {
      const expected = [ { available: null, waiting_funds: null } ]

      expect(response.body).toEqual(expected)
    })
  })

  describe('GET Change Payables to paid', function () {
    let response

    beforeEach(async () => {
      response = await request(app)
        .get('/api/v1/payables/change-payables-to-paid')
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return status ok', () => {
      expect(response.status).toEqual(200)
    })

    it('should contain message', () => {
      expect(response.body).toEqual({ message: 'Payable changes' })
    })
  })
})
