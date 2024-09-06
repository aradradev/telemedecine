const User = require('../models/User')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  const { name, email, password } = req.body

  const isEmailExist = await User.findOne({ email })
  if (isEmailExist) {
    throw new CustomError.BadRequestError('Email already exist')
  }

  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? 'admin' : 'patient'

  const user = await User.create({ name, email, password, role })
  const tokenUser = { name: user.name, userId: user._id, role: user.role }
  res.status(StatusCodes.CREATED).json({ user: tokenUser })
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
