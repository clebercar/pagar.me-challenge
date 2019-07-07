const router = require('express').Router()
const PayablesController = require('../../app/controllers/PayableController')

router.get('/payables/balances', PayablesController.index)
router.get('/payables/change-payables-to-paid', PayablesController.changePayablesToPaid)

module.exports = router
