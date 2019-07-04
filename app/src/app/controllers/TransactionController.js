const TransactionRepository = require('../repositories/TransactionRepository')
const PayableRepository = require('../repositories/PayableRepository')

class TransactionController {
  async index (req, res) {
    const transaction = await TransactionRepository.all()
    res.json(transaction)
  }

  async create (req, res) {
    const transaction = await TransactionRepository.create(req.body)
    await PayableRepository.create(transaction)

    res.json(transaction)
  }
}

module.exports = new TransactionController()
