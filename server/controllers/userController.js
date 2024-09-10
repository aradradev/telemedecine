const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermissions, attachCookiesToResponse, createTokenUser } = require('../utils')

// Get All Users (for admin access only)
const getAllUsers = async (req, res) => {
  const users = await User.find({ role: 'patient' }).select('-password')
  res.status(StatusCodes.OK).json({ users })
}

// Get a Single User (for admin or current user)
const getSingleUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId }).select('-password')

  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${userId}`)
  }

  // Only allow access to admin or the same user
  checkPermissions(req.user, user._id)
  res.status(StatusCodes.OK).json({ user })
}

// Show Current Logged-in User
const showCurrentUser = async (req, res) => {
  const currentUser = req.user
  res.status(StatusCodes.OK).json({ user: currentUser })
}

// Update User Profile
const updateUser = async (req, res) => {
  const { name, email } = req.body
  if (!name || !email) {
    throw new CustomError.BadRequestError('Invalid Credentials')
  }
  const user = await User.findOne({ _id: req.user.userId })

  if (!user) {
    throw new CustomError.NotFoundError('User not found')
  }

  // Update user fields
  user.name = name
  user.email = email

  await user.save()
  const tokenUser = createTokenUser(user)

  attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ success: true, message: 'User updated successfully', user: tokenUser })
}

// Update User Password
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

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
}
