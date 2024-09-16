const mongoose = require('mongoose')
const Doctor = require('../models/Doctor')

const ReviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
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

ReviewSchema.index({ doctor: 1, user: 1 }, { unique: true })

ReviewSchema.statics.calculateAverageRating = async function (doctorId) {
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: '$doctor',
        averageRating: { $avg: '$rating' },
        numOfReviews: { $sum: 1 },
      },
    },
  ])
  // console.log(stats)
  // await Doctor.findByIdAndUpdate(doctorId, {
  //   totalRating: stats[0].numOfReviews,
  //   averageRating: stats[0].averageRating,
  // })

  try {
    await this.model('Doctor').findOneAndUpdate(
      { _id: doctorId },
      {
        averageRating: Math.ceil(stats[0]?.averageRating || 0),
        totalRating: Math.ceil(stats[0]?.numOfReviews || 0),
      },
    )
  } catch (error) {
    console.log(error)
  }
}

ReviewSchema.post('save', async function () {
  await this.constructor.calculateAverageRating(this.doctor)
})
ReviewSchema.post('deleteOne', { document: true, query: false }, async function () {
  await this.constructor.calculateAverageRating(this.doctor)
})

module.exports = mongoose.model('Review', ReviewSchema)
