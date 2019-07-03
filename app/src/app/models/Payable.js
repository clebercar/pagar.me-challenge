module.exports = (sequelize, DataTypes) => {
  const Payable = sequelize.define(
    'Payable',
    {
      status: DataTypes.ENUM('paid', 'waiting_funds'),
      payment_date: DataTypes.DATE,
      amount: DataTypes.DECIMAL(10, 2),
      transaction_id: DataTypes.INTEGER
    },
    {
      hooks: {
        beforeSave: async payable => {
        }
      }
    }
  )

  Payable.associate = models => {
    Payable.hasOne(models.Transaction, { foreignKey: 'transaction_id', as: 'transaction' })
  }

  return Payable
}
