const TransactionRepository = require('../repositories/TransactionRepository')
const PayableRepository = require('../repositories/PayableRepository')

class TransactionController {
  async index (req, res) {
    const transaction = await TransactionRepository.all(req.userId)
    res.json(transaction)
  }

  async create (req, res) {
    try {
      const transaction = await TransactionRepository
        .create({ user_id: req.userId, ...req.body })

      await PayableRepository.create(transaction)

      return res.status(200).send(transaction)
    } catch (err) {
      const errors = {
        errors: err.errors.map((item) => item.message)
      }

      return res.status(400).send(errors)
    }
  }
}

module.exports = new TransactionController()
