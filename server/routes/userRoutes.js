const express = require('express')
const {
  getAllUsers,
  showCurrentUser,
  updateUser,
  getSingleUser,
  updateUserPassword,
} = require('../controllers/userController')
const { authenticateUser, authorizedPermissions } = require('../middleware/authentication')

const router = express.Router()

router.route('/').get(authenticateUser, authorizedPermissions('admin'), getAllUsers)

router.route('/showMe').get(authenticateUser, showCurrentUser)
router.route('/updateUser').patch(authenticateUser, updateUser)
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword)

// single user
router.route('/:id').get(authenticateUser, getSingleUser)

module.exports = router
