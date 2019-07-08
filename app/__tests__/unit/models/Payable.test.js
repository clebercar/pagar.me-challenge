const { Payable } = require('../../../src/app/models')
const factory = require('../../factories')
const faker = require('faker')

describe('Payable', () => {
  describe('Calculate transaction Fee', () => {
    const transactionValue = faker.finance.amount()
    const percentage = 0.03

    const result = transactionValue - transactionValue * percentage

    it('should discount the processing fee', () => {
      expect(Payable.transactionFee(transactionValue, percentage))
        .toEqual(result)
    })
  })

  describe('Check transaction to create an payable', () => {
    let transaction
    let payable

    beforeEach(async () => {
      transaction = await factory.create('Transaction')
      payable = Payable.checkTransaction(transaction)
    })

    it('should return an object payable', () => {
      expect(typeof Payable.checkTransaction(transaction))
        .toBe('object')

      expect(Payable.checkTransaction(transaction))
        .toEqual(
          expect.objectContaining(payable)
        )
    })
  })
})
