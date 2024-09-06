const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
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
  phone: { type: String },
  photo: { type: String },
  role: {
    type: String,
    enum: ['patient', 'admin'],
    default: 'patient',
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  bloodType: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  appointments: {
    type: mongoose.Types.ObjectId,
    ref: 'Appointment',
  },
})

module.exports = mongoose.model('User', UserSchema)
