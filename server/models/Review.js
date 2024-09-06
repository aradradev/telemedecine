const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: 'Doctor',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    reviewText: {
      type: String,
      required: [true, 'Please provide review'],
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Review', ReviewSchema)
