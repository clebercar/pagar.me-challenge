const request = require('supertest')
const app = require('../../../src/app')
const factory = require('../../factories')

describe('Transaction Controller', () => {
  let user

  beforeAll(async () => {
    user = await factory.create('User')
  })

  describe('GET Index', function () {
    let response
    let transactions

    beforeEach(async () => {
      transactions = await factory
        .createMany('Transaction', 5, { user_id: user.id })

      response = await request(app)
        .get('/api/v1/transactions')
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return an list of transactions', () => {
      expect(response.body.length).toEqual(transactions.length)
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })
  })

  describe('POST Create', function () {
    let response
    let transactionAttrs

    beforeEach(async () => {
      transactionAttrs = await factory.attrs('Transaction')

      response = await request(app)
        .post('/api/v1/transactions')
        .set('Authorization', `Bearer ${user.generateToken()}`)
        .send(transactionAttrs)
    })

    it('should return an transaction created', async () => {
      expect(typeof response.body).toBe('object')
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })
  })
})