const TransactionRepository = require('../repositories/TransactionRepository')
const { Payable } = require('../models')

class TransactionController {
  async index (req, res) {
    const transaction = await TransactionRepository.all()
    res.json(transaction)
  }

  async create (req, res) {
    const transaction = await TransactionRepository.create(req.body)

    await Payable.create({
      status: 'paid',
      payment_date: '2020-12-15',
      amount: 320.50,
      transaction_id: transaction.id
    })

    res.json(transaction)
  }
}

module.exports = new TransactionController()
