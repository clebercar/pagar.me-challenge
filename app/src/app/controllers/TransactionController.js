const { sequelize } = require('../models')
const TransactionRepository = require('../repositories/TransactionRepository')
const PayableRepository = require('../repositories/PayableRepository')

class TransactionController {
  async index (req, res) {
    const transaction = await TransactionRepository.all(req.userId)
    res.json(transaction)
  }

  async create (req, res) {
    let dataBaseTransaction

    try {
      dataBaseTransaction = await sequelize.transaction()

      const transaction = await TransactionRepository
        .create({ ...req.body, user_id: req.userId }, { dataBaseTransaction })

      await PayableRepository.create(transaction, { dataBaseTransaction })

      await dataBaseTransaction.commit()

      return res.status(200).send(transaction)
    } catch (error) {
      if (error) await dataBaseTransaction.rollback()

      const message = `There was an error creating the transaction, 
        please contact support.`

      return res.status(400).json({ 'message': message })
    }
  }
}

module.exports = new TransactionController()
