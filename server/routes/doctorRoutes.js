const express = require('express')
const { getAllDoctors, updateDoctor, deleteDoctor, getSingleDoctor } = require('../controllers/doctorController')

const { authenticateUser, authorizedPermissions } = require('../middleware/authentication')

const reviewRouter = require('./reviewRoutes')

const router = express.Router()

// nested router for review
// router.use('/:doctorId/reviews', reviewRouter)

router.route('/').get(getAllDoctors)

router
  .route('/:id')
  .get(authenticateUser, getSingleDoctor)
  .patch(authenticateUser, authorizedPermissions('admin', 'doctor'), updateDoctor)
  .delete(authenticateUser, authorizedPermissions('admin', 'doctor'), deleteDoctor)

module.exports = router
