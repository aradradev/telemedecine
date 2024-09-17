const express = require('express')
const {
  getAllUsers,
  showCurrentUser,
  updateUser,
  getSingleUser,
  updateUserPassword,
  getMyAppointments
} = require('../controllers/userController')
const { authenticateUser, authorizedPermissions } = require('../middleware/authentication')

const router = express.Router()

router.route('/').get(authenticateUser, authorizedPermissions('admin'), getAllUsers)

router.route('/profile/me').get(authenticateUser, authorizedPermissions('patient'), showCurrentUser)
router.route('/updateUser').patch(authenticateUser, updateUser)
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword)
router.rooute('/appointments/my-appointments').get(authenticateUser, authorizedPermissions('patient'),getMyAppointments)

// single user
router.route('/:id').get(authenticateUser, getSingleUser)

module.exports = router
