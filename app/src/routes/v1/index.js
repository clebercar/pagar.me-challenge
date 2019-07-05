const router = require('express').Router()
const TransactionsRoutes = require('./TransactionsRoutes')
const PayablesRoutes = require('./PayablesRoutes')
const UsersRoutes = require('./UsersRoutes')

router.use('/v1', TransactionsRoutes)
router.use('/v1', PayablesRoutes)
router.use('/v1', UsersRoutes)

module.exports = router
