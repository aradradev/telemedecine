const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermissions, attachCookiesToResponse, createTokenUser } = require('../utils')
const Doctor = require('../models/Doctor')
const Booking = require('../models/Booking')

const getAllUsers = async (req, res) => {
  const patients = await User.find({ role: 'patient' }).select('-password')
  const doctors = await Doctor.find({ role: 'doctor' }).select('-password')
  const users = [...patients, ...doctors]
  res.status(StatusCodes.OK).json({ users })
}

const getSingleUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId }).select('-password')

  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${userId}`)
  }

  checkPermissions(req.user, user._id)
  res.status(StatusCodes.OK).json({ user })
}

const showCurrentUser = async (req, res) => {
  const currentUser = req.user
  res.status(StatusCodes.OK).json({ user: currentUser })
}

const updateUser = async (req, res) => {
  const { name, email } = req.body
  console.log(req.body)
  if (!name || !email) {
    console.log('Payload error')
    throw new CustomError.BadRequestError('Please provide both name and email')
  }

  const user = await User.findOne({ _id: req.user.userId })
  console.log('user found', user)

  if (!user) {
    throw new CustomError.NotFoundError('User not found')
  }

  user.name = name
  user.email = email

  await user.save()
  console.log('user updated', user)

  const tokenUser = createTokenUser(user)

  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User updated successfully',
    user: tokenUser,
  })
}

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  const user = await User.findOne({ _id: req.user.userId })

  if (!user) {
    throw new CustomError.NotFoundError('User not found')
  }

  const isPasswordCorrect = await user.comparePassword(oldPassword)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }

  user.password = newPassword
  await user.save()
  res.status(StatusCodes.OK).json({ success: true, message: 'Password updated successfully' })
}

const getMyAppointments = async (req, res) => {
  // step-1: retrieve appointment from booking for specific user
  const bookings = await Booking.find({ user: req.user.userId })

  // step-2: extract doctor ids from appointments booking
  const doctorIds = bookings.map((el) => el.doctor.id)

  // step-3: retrieve doctors using doctor ids
  const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password')

  res.status(StatusCodes.OK).json({})
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
}
