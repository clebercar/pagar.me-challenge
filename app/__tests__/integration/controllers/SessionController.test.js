const request = require('supertest')
const app = require('../../../src/app')
const factory = require('../../factories')

describe('Session Controller', () => {
  it('should authenticate with valid credentials', async () => {
    const { email, password } = await factory.create('User')

    const response = await request(app)
      .post('/api/v1/auth')
      .send({ email, password })

    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () => {
    const user = await factory.create('User', { password: '1212' })

    const response = await request(app)
      .post('/api/v1/auth')
      .send({
        email: user.email,
        password: '12345'
      })

    expect(response.status).toBe(401)
  })

  it('should return jwt token when authenticated', async () => {
    const { email, password } = await factory.create('User')

    const response = await request(app)
      .post('/api/v1/auth')
      .send({ email, password })

    expect(response.body).toHaveProperty('token')
  })

  it('should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User')

    const response = await request(app)
      .get('/api/v1/transactions')
      .set('Authorization', `Bearer ${user.generateToken()}`)

    expect(response.status).toBe(200)
  })

  it('should not be able to access private routes whithout jwt token', async () => {
    const response = await request(app)
      .get('/api/v1/transactions')

    expect(response.status).toBe(401)
  })

  it('should not be able to access private routes with invalid jwt token', async () => {
    const response = await request(app)
      .get('/api/v1/transactions')
      .set('Authorization', `Bearer xxxx`)

    expect(response.status).toBe(401)
  })
})