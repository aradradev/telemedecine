const Doctor = require('../models/Doctor')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const getAllDoctors = async (req, res) => {
  const doctors = await Doctor.find({}).select('-password')
  res.status(StatusCodes.OK).json({ doctors })
}
const getSingleDoctor = async (req, res) => {
  const { id: doctorId } = req.params
  const doctor = await Doctor.findById(doctorId).select('-password')
  if (!doctor) {
    throw new CustomError.NotFoundError(`No doctor with id: ${doctorId}`)
  }
  res.status(StatusCodes.OK).json({ doctor })
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
