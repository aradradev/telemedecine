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
  const { id: doctorId } = req.params
  const { name, email, phone, photo, specialization, qualifications, experiences, bio, ticketPrice, timeSlots } =
    req.body

  const doctor = await Doctor.findById(doctorId)
  if (!doctor) {
    throw new CustomError.NotFoundError(`No doctor with id: ${doctorId}`)
  }

  if (name) doctor.name = name
  if (email) doctor.email = email
  if (phone) doctor.phone = phone
  if (photo) doctor.photo = photo
  if (specialization) doctor.specialization = specialization
  if (qualifications) doctor.qualifications = qualifications
  if (experiences) doctor.experiences = experiences
  if (bio) doctor.bio = bio
  if (ticketPrice) doctor.ticketPrice = ticketPrice
  if (timeSlots) doctor.timeSlots = timeSlots

  await doctor.save()

  res.status(StatusCodes.OK).json({ doctor, message: 'Doctor updated successfully' })
}

const deleteDoctor = async (req, res) => {
  const { id: doctorId } = req.params
  const doctor = await Doctor.findById(doctorId)
  if (!doctor) {
    throw new CustomError.NotFoundError(`No doctor with id: ${doctorId}`)
  }

  await doctor.remove()

  res.status(StatusCodes.OK).json({ message: 'Doctor deleted successfully' })
}

module.exports = {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
}
