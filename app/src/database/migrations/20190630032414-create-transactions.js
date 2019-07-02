module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      payment_type: {
        type: Sequelize.ENUM('debit_card', 'credit_card'),
        allowNull: false
      },
      card_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name_on_card: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expiration_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cvv: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transactions')
  }
}
