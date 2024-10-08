const mongoose = require('mongoose')

const BookingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    ticketPrice: { type: Number, required: true },
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'cancelled'],
      default: 'pending',
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Booking', BookingSchema)
