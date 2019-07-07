const logger = require('../../config/winston')
const PayableRepository = require('../repositories/PayableRepository')

class PayableController {
  async index (req, res) {
    const payables = await PayableRepository.findBalances(req.userId)

    res.status(200).json(payables)
  }

  async changePayablesToPaid (req, res) {
    logger.info('Changing payable for paid')
    await PayableRepository.changePayablesToPaid()

    return res.status(200).json({ message: 'Payable changes' })
  }
}

module.exports = new PayableController()
