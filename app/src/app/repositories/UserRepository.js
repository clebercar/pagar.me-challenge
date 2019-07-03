const { User } = require('../models')

class UserRepository {
  async create (params) {
    const user = await User.create(params)
    return user
  }
}

module.exports = new UserRepository()
