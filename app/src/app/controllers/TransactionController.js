const TransactionRepository = require('../repositories/TransactionRepository')

class TransactionController {
  async index (req, res) {
    const transaction = await TransactionRepository.all()
    res.json(transaction)
  }

  async create (req, res) {
    const transaction = await TransactionRepository.create(req.body)
    res.json(transaction)
  }
}

module.exports = new TransactionController()
