const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
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
    min: 0,
    max: 5,
    default: 0,
  },
})

module.exports = mongoose.model('Review', ReviewSchema)
