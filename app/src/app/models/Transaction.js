module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    value: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    payment_type: DataTypes.ENUM('debit_card', 'credit_card'),
    card_number: DataTypes.INTEGER,
    name_on_card: DataTypes.STRING,
    expiration_date: DataTypes.DATE,
    cvv: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  })

  Transaction.associate = models => {
    Transaction.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }

  return Transaction
}
