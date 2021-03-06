const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [4, 20],
          msg: 'This field Name must be between 4 and 20 characters.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'This field Email must be an email valid.'
        }
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      len: {
        args: [6, 8],
        msg: 'This field Password must be between 6 and 8 characters.'
      }
    },
    password_hash: DataTypes.STRING
  },
  {
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      }
    }
  })

  User.prototype.checkPassword = async function (password) {
    const comparePassword = await bcrypt.compare(password, this.password_hash)
    return comparePassword
  }

  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET)
  }

  return User
}
