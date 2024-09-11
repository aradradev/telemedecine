const User = require('../models/User')
const Doctor = require('../models/Doctor')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { createTokenUser, attachCookiesToResponse } = require('../utils')

const register = async (req, res) => {
  const { name, email, password, role: userRole, photo, gender } = req.body

  const userExists = (await User.findOne({ email })) || (await Doctor.findOne({ email }))
  if (userExists) {
    throw new CustomError.BadRequestError('User already exists')
  }

  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? 'admin' : userRole

  let user
  if (role === 'patient') {
    user = new User({ name, email, password, role, photo, gender })
  } else if (role === 'doctor') {
    user = new Doctor({ name, email, password, role, photo, gender })
  } else if (role === 'admin') {
    user = new User({ name, email, password, role, photo, gender })
  } else {
    throw new CustomError.BadRequestError('Invalid role')
  }

  await user.save()
  res.status(StatusCodes.CREATED).json({ success: true, message: 'User successfully created.' })
}

const login = async (req, res) => {
  const { email, password } = req.body
  const user = (await User.findOne({ email })) || (await Doctor.findOne({ email }))

  if (!user) {
    throw new CustomError.NotFoundError('User not found')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }

  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, tokenUser })
  res.status(StatusCodes.OK).json({ success: true, message: 'User successfully logged in.', user: tokenUser })
}

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  })
  res.status(StatusCodes.OK).json({ msg: 'User logged out' })
}

module.exports = {
  register,
  login,
  logout,
}
