module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    value: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: {
          msg: 'Field value can be a decimal number.'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [4, 100],
          msg: 'Field description must be between 4 and 100 characters.'
        }
      }
    },
    payment_type: {
      type: DataTypes.ENUM('debit_card', 'credit_card'),
      validate: {
        isIn: {
          args: [['debit_card', 'credit_card']],
          msg: 'Field payment_type must be debit_card or credit_card.'
        }
      }
    },
    card_number: {
      type: DataTypes.INTEGER,
      validate: {
        isCreditCard: {
          msg: 'Field card_number must be a credit card number.'
        }
      }
    },
    name_on_card: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 8,
          msg: 'Field name_on_card must be at least 8 characters.'
        }
      }
    },
    expiration_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: 'Field expiration_date can not be null.'
        }
      }
    },
    cvv: {
      type: DataTypes.INTEGER,
      validate: {
        len: {
          args: [3, 4],
          msg: 'Field cvv must be at least 3 characters.'
        }
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Field user_id can not be null.'
        }
      }
    }
  },
  {
    hooks: {
      beforeSave: async transaction => {
        if (transaction.card_number) {
          transaction.card_number = transaction.card_number.substr(-4)
        }
      }
    }
  })

  Transaction.associate = models => {
    Transaction.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }

  return Transaction
}
