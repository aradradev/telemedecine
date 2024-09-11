const express = require('express')
const { getAllDoctors, updateDoctor, deleteDoctor, getSingleDoctor } = require('../controllers/doctorController')

const { authenticateUser, authorizedPermissions } = require('../middleware/authentication')

const router = express.Router()

router.route('/').get(authenticateUser, getAllDoctors)

router
  .route('/:id')
  .get(authenticateUser, getSingleDoctor)
  .patch(authenticateUser, authorizedPermissions('admin', 'doctor'), updateDoctor)
  .delete(authenticateUser, authorizedPermissions('admin', 'doctor'), deleteDoctor)

module.exports = router
