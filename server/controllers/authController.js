const User = require('../models/User')
const Doctor = require('../models/Doctor')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { createTokenUser } = require('../utils')

const register = async (req, res) => {
  const { name, email, password, role, photo, gender } = req.body

  // const isEmailExist = await User.findOne({ email })
  // if (isEmailExist) {
  //   throw new CustomError.BadRequestError('Email already exist')
  // }

  // const isFirstAccount = (await User.countDocuments({})) === 0
  // const role = isFirstAccount ? 'admin' : 'patient'

  // const user = await User.create({ name, email, password, role })
  // const tokenUser = createTokenUser(user)
  // res.status(StatusCodes.CREATED).json({ user: tokenUser })

  let user = null

  if (role === 'patient') {
    user = await User.findOne({ email })
  } else if (role === 'doctor') {
    user = await Doctor.findOne({ email })
  }

  if (user) {
    throw new CustomError.BadRequestError('User already exist')
  }

  if (role === 'patient') {
    user = new User({
      name,
      email,
      password,
      role,
      photo,
      gender,
    })
  }
  if (role === 'doctor') {
    user = new Doctor({
      name,
      email,
      password,
      role,
      photo,
      gender,
    })
  }

  await user.save()
  res.status(StatusCodes.CREATED).json({ success: true, message: 'User successfully created.' })
}

const login = async (req, res) => {
  const { email, password } = req.body
  let user = null
  const patient = await User.findOne({ email })
  const doctor = await Doctor.findOne({ email })
  if (patient) {
    user = patient
  }
  if (doctor) {
    user = doctor
  }

  if (!user) {
    throw new CustomError.NotFoundError('User not found')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }
  const tokenUser = createTokenUser(user)
  res.status(StatusCodes.CREATED).json({ user: tokenUser })
}

const logout = async (req, res) => {
  res.send('logout route')
}

module.exports = {
  register,
  login,
  logout,
}
