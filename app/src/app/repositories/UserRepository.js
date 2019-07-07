const { User } = require('../models')

class UserRepository {
  async create (params) {
    const user = await User.create(params)

    return user
  }

  async findByEmail (email) {
    const user = await User.findOne({ where: { email } })

    return user
  }
}

module.exports = new UserRepository()
