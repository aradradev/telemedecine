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
    user = User.findOne({ email })
  } else if (role === 'doctor') {
    user = Doctor.findOne({ email })
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
}

const login = async (req, res) => {
  res.send('login route')
}

const logout = async (req, res) => {
  res.send('logout route')
}

module.exports = {
  register,
  login,
  logout,
}
