const User = require('../models/User')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  const { name, email, password } = req.body
  const user = User.create({ name, email, password })
  res.status(StatusCodes.CREATED).json({ user })
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
