const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const DoctorSchema = new mongoose.Schema(
  {
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
    ticketPrice: { type: Number },
    role: {
      type: String,
      enum: ['doctor'],
      default: 'doctor',
    },
    specialization: {
      type: String,
    },
    qualifications: { type: Array },
    experiences: { type: Array },
    bio: { type: String, maxlength: 500 },
    timeSlots: { type: Array },
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
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    appointments: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Appointment',
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
)

DoctorSchema.virtual('reviewList', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'doctor',
  justOne: false,
})

DoctorSchema.pre('save', async function () {
  if (!this.isModified('password')) return

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

DoctorSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('Doctor', DoctorSchema)
