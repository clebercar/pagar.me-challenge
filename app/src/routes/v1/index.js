const router = require('express').Router()
const TransactionsRoutes = require('./TransactionsRoutes')

router.use('/v1', TransactionsRoutes)

module.exports = router
