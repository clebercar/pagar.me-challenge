const router = require('express').Router()
const TransactionsRoutes = require('./TransactionsRoutes')
const UsersRoutes = require('./UsersRoutes')

router.use('/v1', TransactionsRoutes)
router.use('/v1', UsersRoutes)

module.exports = router
