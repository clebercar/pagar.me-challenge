const router = require('express').Router()
const SessionController = require('../../app/controllers/SessionController')

router.post('/auth', SessionController.create)

module.exports = router
