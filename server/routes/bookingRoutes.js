const express = require('express')
const {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBookingStatus,
  deleteBooking,
  getUserBookings,
} = require('../controllers/bookingController')

const { authenticateUser, authorizedPermissions } = require('../middleware/authentication')

const router = express.Router()

// Routes for booking
// Get all bookings and create a booking
router
  .route('/')
  .get(authenticateUser, authorizedPermissions('admin'), getAllBookings) // Only admin can see all bookings
  .post(authenticateUser, authorizedPermissions('patient'), createBooking) // Only patients can create bookings

// Get bookings for a specific user (patient)
router.route('/user/myBookings').get(authenticateUser, authorizedPermissions('patient'), getUserBookings)

// Routes for a specific booking by ID
router
  .route('/:id')
  .get(authenticateUser, getSingleBooking) // Both users and doctors can see booking details
  .patch(authenticateUser, authorizedPermissions('admin', 'doctor'), updateBookingStatus) // Admin or doctor can update booking status
  .delete(authenticateUser, authorizedPermissions('admin'), deleteBooking) // Only admin can delete a booking

module.exports = router
