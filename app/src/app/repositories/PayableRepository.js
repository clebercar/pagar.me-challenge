/* eslint no-unexpected-multiline: "error" */
const Sequelize = require('sequelize')
const { Payable } = require('../models')

class PayableRepository {
  async create (transaction) {
    const { status, payment_date, amount } = Payable.checkTransaction(transaction)

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

    const payables = await Payable.findAll({
      attributes: [
        [Sequelize.literal(cases.available), 'available'],
        [Sequelize.literal(cases.waitingFunds), 'waiting_funds']]
    })

    return payables
  }
}

module.exports = new PayableRepository()
