const UserRepository = require('../repositories/UserRepository')

class UserController {
  async create (req, res) {
    try {
      const user = await UserRepository.create(req.body)

      return res.status(200).send(user)
    } catch (err) {
      const errors = {
        errors: err.errors.map((item) => item.message)
      }

      return res.status(400).send(errors)
    }
  }
}

module.exports = new UserController()
