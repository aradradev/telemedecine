const Booking = require('../models/Booking')
const Doctor = require('../models/Doctor')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')

// Create a booking
const createBooking = async (req, res) => {
  const { doctor: doctorId, appointmentDate, ticketPrice } = req.body

  const doctor = await Doctor.findById(doctorId)
  if (!doctor) {
    throw new CustomError.NotFoundError(`No doctor found with id: ${doctorId}`)
  }

  req.body.user = req.user.userId

  const booking = await Booking.create(req.body)
  res.status(StatusCodes.CREATED).json({ booking })
}

// Get all bookings
const getAllBookings = async (req, res) => {
  const bookings = await Booking.find().populate('doctor', 'name specialization').populate('user', 'name email')
  res.status(StatusCodes.OK).json({ bookings })
}

// Get single booking
const getSingleBooking = async (req, res) => {
  const { id: bookingId } = req.params

  const booking = await Booking.findById(bookingId).populate('doctor', 'name specialization').populate('user', 'name email')
  if (!booking) {
    throw new CustomError.NotFoundError(`No booking with id: ${bookingId}`)
  }

  res.status(StatusCodes.OK).json({ booking })
}

// Update booking status
const updateBookingStatus = async (req, res) => {
  const { id: bookingId } = req.params
  const { status } = req.body

  const booking = await Booking.findById(bookingId)
  if (!booking) {
    throw new CustomError.NotFoundError(`No booking with id: ${bookingId}`)
  }

  booking.status = status
  await booking.save()

  res.status(StatusCodes.OK).json({ booking })
}

// Delete a booking
const deleteBooking = async (req, res) => {
  const { id: bookingId } = req.params

  const booking = await Booking.findById(bookingId)
  if (!booking) {
    throw new CustomError.NotFoundError(`No booking with id: ${bookingId}`)
  }

  await booking.remove()
  res.status(StatusCodes.OK).json({ msg: 'Booking deleted successfully' })
}

// Get bookings for a user (patient)
const getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.userId }).populate('doctor', 'name specialization')
  res.status(StatusCodes.OK).json({ bookings })
}

module.exports = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBookingStatus,
  deleteBooking,
  getUserBookings,
}
