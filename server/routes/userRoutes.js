const express = require('express')
const {
  getAllUsers,
  showCurrentUser,
  updateUser,
  getSingleUser,
  updateUserPassword,
} = require('../controllers/userController')

const router = express.Router()

router.route('/').get(getAllUsers)

router.route('/showMe').get(showCurrentUser)
router.route('/updateUser').patch(updateUser)
router.route('/updateUserPassword').patch(updateUserPassword)

// single user
router.route('/:id').get(getSingleUser)

module.exports = router
