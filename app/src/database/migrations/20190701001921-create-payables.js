module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payables', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('paid', 'waiting_funds'),
        allowNull: false
      },
      fee: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      transaction_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'transactions',
          key: 'id'
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payables')
  }
}
