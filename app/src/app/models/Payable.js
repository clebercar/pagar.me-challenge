const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  const Payable = sequelize.define(
    'Payable',
    {
      status: DataTypes.ENUM('paid', 'waiting_funds'),
      payment_date: DataTypes.DATE,
      amount: DataTypes.DECIMAL(10, 2),
      transaction_id: DataTypes.INTEGER
    }
  )

  Payable.transactionFee = function (transactionValue, percentege) {
    return transactionValue - transactionValue * percentege
  }

  Payable.checkTransaction = function (transaction) {
    switch (transaction.payment_type) {
      case 'debit_card':
        return {
          status: 'paid',
          amount: Payable.transactionFee(transaction.value, 0.03),
          payment_date: moment()
        }
      case 'credit_card':
        return {
          status: 'waiting_funds',
          amount: Payable.transactionFee(transaction.value, 0.05),
          payment_date: moment().add(30, 'days')
        }
    }
  }

  Payable.associate = models => {
    Payable.hasOne(models.Transaction, { foreignKey: 'transaction_id', as: 'transaction' })
  }

  return Payable
}
