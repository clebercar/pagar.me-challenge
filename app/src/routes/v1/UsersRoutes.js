const router = require('express').Router()
const UserController = require('../../app/controllers/UserController')

router.post('/users', UserController.create.bind(UserController))

module.exports = router
