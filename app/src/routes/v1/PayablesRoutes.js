const router = require('express').Router()
const PayablesController = require('../../app/controllers/PayableController')

router.get('/payables/balances', PayablesController.index)

module.exports = router
