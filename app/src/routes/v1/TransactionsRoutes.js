const router = require('express').Router()
const TransactionController = require('../../app/controllers/TransactionController')

router.get('/transactions', TransactionController.index.bind(TransactionController))
router.post('/transactions', TransactionController.create.bind(TransactionController))

module.exports = router
