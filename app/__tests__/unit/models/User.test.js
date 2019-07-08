const factory = require('../../factories')

describe('User', () => {
  describe('Validation schema', () => {
    it('Should return an error if name less than 4 characters or more than 20 characters', () => {
      factory.create('User', { name: '' })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('This field Name must be between 4 and 20 characters.')
        })
    })

    it('Should return an error if email is not valid', () => {
      factory.create('User', { email: 'test.com' })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('This field Email must be an email valid.')
        })
    })

    it('Should return an error if password less than 6 characters or more than 8 characters', () => {
      factory.create('User', { password: 'pass' })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('This field Password must be between 6 and 8 characters.')
        })
    })
  })
})
