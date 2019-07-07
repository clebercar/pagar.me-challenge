const router = require('express').Router()
const authMiddleware = require('../../app/middlewares/auth')
const TransactionsRoutes = require('./TransactionsRoutes')
const PayablesRoutes = require('./PayablesRoutes')
const UsersRoutes = require('./UsersRoutes')
const SessionRoutes = require('./SessionRoutes')

router.use('/v1', UsersRoutes)
router.use('/v1', SessionRoutes)

router.use(authMiddleware)

router.use('/v1', TransactionsRoutes)
router.use('/v1', PayablesRoutes)

module.exports = router
