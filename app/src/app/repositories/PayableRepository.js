const { Payable, sequelize, Sequelize } = require('../models')
const moment = require('moment')
const logger = require('../../config/winston')

class PayableRepository {
  async create (transaction) {
    const { status, payment_date, amount } = Payable
      .checkTransaction(transaction)

    const payable = await Payable.create({
      status,
      payment_date,
      amount,
      transaction_id: transaction.id
    })

    return payable
  }

  async findBalances (userId) {
    const payables = await sequelize.query(`
      SELECT
        SUM(CASE WHEN status = 'paid' THEN amount END) AS "available", 
        SUM(CASE WHEN status = 'waiting_funds' THEN amount END) AS "waiting_funds"
      FROM payables 
      INNER JOIN transactions ON payables.transaction_id = transactions.id 
      AND transactions.user_id = (:userId)`,
    {
      replacements: { userId },
      model: Payable,
      mapToModel: true
    })

    return payables
  }

  async changePayablesToPaid () {
    const payablesToPaid = await Payable.update(
      { status: 'paid' },
      {
        where: {
          status: 'waiting_funds',
          payment_date: {
            [Sequelize.Op.gte]: moment().format('YYYY-MM-DD HH:mm:ss')
          }
        }
      }
    )

    logger.info(`Total de payables change: ${payablesToPaid}`)
    return payablesToPaid
  }
}

module.exports = new PayableRepository()
