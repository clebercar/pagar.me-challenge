const { Payable } = require('../models')

class PayableRepository {
  async create (transaction) {
    console.log('payable', Payable)
    const { status, payment_date, amount } = Payable.checkTransaction(transaction)

    const payable = await Payable.create({
      status,
      payment_date,
      amount,
      transaction_id: transaction.id
    })

    return payable
  }
}

module.exports = new PayableRepository()
