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

  async findBalances () {
    const cases = {
      available: "SUM(CASE WHEN status = 'paid' THEN amount END)",
      waitingFunds: "SUM(CASE WHEN status = 'waiting_funds' THEN amount END)"
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
