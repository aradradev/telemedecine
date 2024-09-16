const express = require('express')
const { register, login, logout, getCurrentUser } = require('../controllers/authController')
const { checkPermissions } = require('../utils')

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/me').get(getCurrentUser)

module.exports = router
