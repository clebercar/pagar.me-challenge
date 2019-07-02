const { Transaction } = require('../models')

class TransactionRepository {
  async create (params) {
    const transaction = await Transaction.create(params)

    return transaction
  }

  async all () {
    const transaction = await Transaction.findAll({})
    return transaction
  }
}

module.exports = new TransactionRepository()
