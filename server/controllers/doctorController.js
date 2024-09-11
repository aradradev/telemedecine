const Doctor = require('../models/Doctor')
const { StatusCodes } = require('http-status-codes')

const getAllDoctors = async (req, res) => {
  const doctors = await Doctor.find({}).select('-password')
  res.status(StatusCodes.OK).json({ doctors })
}
const getSingleDoctor = async (req, res) => {
  res.send('get single doctor')
}

const updateDoctor = async (req, res) => {
  res.send('update doctor')
}
const deleteDoctor = async (req, res) => {
  res.send('delete doctor')
}

module.exports = {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
}
