const Doctor = require('../models/Doctor')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermissions } = require('../utils')
const Booking = require('../models/Booking')

const getAllDoctors = async (req, res) => {
  const { specialization, name, minRating, maxRating, sort, fields } = req.query

  const queryObject = {}

  if (specialization) {
    queryObject.specialization = specialization
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }

  if (minRating) {
    queryObject.averageRating = { $gte: Number(minRating) }
  }
  if (maxRating) {
    queryObject.averageRating = { ...queryObject.averageRating, $lte: Number(maxRating) }
  }

  let result = Doctor.find(queryObject).select('-password')

  if (sort) {
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  } else {
    result = result.sort('createdAt')
  }

  if (fields) {
    const fieldList = fields.split(',').join(' ')
    result = result.select(fieldList)
  }

  const doctors = await result

  res.status(StatusCodes.OK).json({ doctors, count: doctors.length })
}

const getSingleDoctor = async (req, res) => {
  const { id: doctorId } = req.params
  const doctor = await Doctor.findById(doctorId)
    .populate({ path: 'reviews', select: 'user reviewText rating' })
    .select('-password')
  if (!doctor) {
    throw new CustomError.NotFoundError(`No doctor with id: ${doctorId}`)
  }
  res.status(StatusCodes.OK).json({ doctor })
}

const updateDoctor = async (req, res) => {
  const { id: doctorId } = req.params
  const {
    name,
    email,
    phone,
    photo,
    specialization,
    hospital,
    qualifications,
    experiences,
    bio,
    ticketPrice,
    timeSlots,
  } = req.body

  const doctor = await Doctor.findById(doctorId).select('-password')
  if (!doctor) {
    throw new CustomError.NotFoundError(`No doctor with id: ${doctorId}`)
  }

  if (name) doctor.name = name
  if (email) doctor.email = email
  if (phone) doctor.phone = phone
  if (photo) doctor.photo = photo
  if (specialization) doctor.specialization = specialization
  if (hospital) doctor.hospital = hospital
  if (qualifications) doctor.qualifications = qualifications
  if (experiences) doctor.experiences = experiences
  if (bio) doctor.bio = bio
  if (ticketPrice) doctor.ticketPrice = ticketPrice
  if (timeSlots) doctor.timeSlots = timeSlots

  checkPermissions(req.user, doctor._id)

  await doctor.save()

  res.status(StatusCodes.OK).json({ doctor, message: 'Doctor updated successfully' })
}

const deleteDoctor = async (req, res) => {
  const { id: doctorId } = req.params
  const doctor = await Doctor.findById(doctorId)
  if (!doctor) {
    throw new CustomError.NotFoundError(`No doctor with id: ${doctorId}`)
  }

  checkPermissions(req.user, doctor._id)

  await doctor.deleteOne()

  res.status(StatusCodes.OK).json({ message: 'Doctor deleted successfully' })
}

const getDoctorProfile = async (req, res) => {
  const doctorId = req.user.userId
  const doctor = await Doctor.findById(doctorId).select('-password')
  if (!doctor) {
    throw new CustomError.NotFoundError(`No doctor with id: ${doctorId}`)
  }

  // get appointment from the Booking
  const appointments = await Booking.find({ doctor: doctorId })
    .populate('patient', 'name email photo bloodType')
    .sort('appointmentDate')
    .catch((error) => {
      throw new CustomError.BadRequestError('Error fetching appointments')
    })

  res.status(StatusCodes.OK).json({ doctor, appointments })
}

module.exports = {
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctorProfile,
}
