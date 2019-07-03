const UserRepository = require('../repositories/UserRepository')

class UserController {
  async create (req, res) {
    const user = await UserRepository.create(req.body)

    res.json(user)
  }
}

module.exports = new UserController()
