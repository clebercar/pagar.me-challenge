const { Transaction } = require('../models')

class TransactionRepository {
  async create (params) {
    const transaction = await Transaction.create(params)

    return transaction
  }

  async all (userId) {
    const transaction = await Transaction
      .findAll({ where: { user_id: userId } })

    return transaction
  }
}

module.exports = new TransactionRepository()
