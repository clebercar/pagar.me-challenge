const router = require('express').Router()

router.use('/api', require('./v1'))

module.exports = router
