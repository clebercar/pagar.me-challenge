const PayableRepository = require('../repositories/PayableRepository')

class PayableController {
  async index (res) {
    const payables = await PayableRepository.findBalances()

    res.json(payables)
  }
}

module.exports = new PayableController()
