module.exports = (sequelize, DataTypes) => {
  const Payable = sequelize.define('Payable', {
    status: DataTypes.ENUM('paid', 'waiting_funds'),
    value: DataTypes.DECIMAL(10, 2)
  })

  Payable.associate = models => {
    Payable.hasOne(models.Transaction, { foreignKey: 'transaction_id', as: 'transaction' })
  }

  return Payable
}
