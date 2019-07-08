const factory = require('../../factories')
const faker = require('faker')

describe('Transaction', () => {
  describe('Validation schema', () => {
    it('should return an error if value not be an decimal number', () => {
      factory.create('Transaction', { value: '10.5' })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('Field value can be a decimal number.')
        })
    })

    it('should return an error if description is less than 4 characters or more than 100 characters', () => {
      factory.create('Transaction', { description: faker.lorem.text() })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('Field description must be between 4 and 100 characters.')
        })
    })

    it('should return an error if payment_type is different from debit_card or credit_card', () => {
      factory.create('Transaction', { payment_type: faker.finance.bic() })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('Field payment_type must be debit_card or credit_card.')
        })
    })

    it('should return an error if card_number not be an credit card number', () => {
      factory.create('Transaction', { card_number: faker.finance.account() })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('Field card_number must be a credit card number.')
        })
    })

    it('should return an error if name_on_card is less than 8 characters', () => {
      factory.create('Transaction', { name_on_card: faker.name.suffix() })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('Field name_on_card must be at least 8 characters.')
        })
    })

    it('should return an error if expiration_date is null', () => {
      factory.create('Transaction', { expiration_date: null })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('Field expiration_date can not be null.')
        })
    })

    it('should return an error if CVV is less than 3 characters or longer than 4 characters', () => {
      factory.create('Transaction', { cvv: faker.finance.account() })
        .catch((err) => {
          expect(err.errors[0].message)
            .toEqual('Field cvv must be at least 3 characters.')
        })
    })
  })
})
