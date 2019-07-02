module.exports = (sequelize, DataTypes) => {
  const Payable = sequelize.define('Payable', {
    status: DataTypes.ENUM('paid', 'waiting_funds'),
    value: DataTypes.DECIMAL(10, 2)
  })

  Payable.associate = models => {
    Payable.belongsTo(models.Transaction, { foreignKey: 'transaction_id', as: 'transaction' })
  }

  return Payable
}
