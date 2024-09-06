const mongoose = require('mongoose')
const validator = require('validator')

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  phone: { type: Number },
  photo: { type: String },
  ticketPrice: { type: Number },
  role: {
    type: String,
  },
  specialization: {
    type: String,
  },
  qualifications: { type: Array },
  experiences: { type: Array },
  bio: { type: String, maxlength: 50 },
  timeSlots: { type: Array },
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Review',
    },
  ],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ['pending', 'approved', 'cancelled'],
    default: 'pending',
  },
  appointments: {
    type: mongoose.Types.ObjectId,
    ref: 'Appointment',
  },
})

module.exports = mongoose.model('Doctor', DoctorSchema)
