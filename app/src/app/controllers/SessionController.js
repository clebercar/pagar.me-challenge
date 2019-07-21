const UserRepository = require('../repositories/UserRepository')

class SessionController {
  async create (req, res) {
    const { email, password } = req.body

    const user = await UserRepository.findByEmail(email)

    if (!user || !await user.checkPassword(password)) {
      return res.status(401).json({ message: 'Email or password incorrect' })
    }

    return res.json({
      user,
      token: user.generateToken()
    })
  }
}

module.exports = new SessionController()
