const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const Doctor = require('../models/Doctor')
const Review = require('../models/Review')
const { checkPermissions } = require('../utils')

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({}).populate({ path: 'user', select: 'name photo' })
  res.status(StatusCodes.OK).json({ reviews, count: reviews.length })
}

const createReview = async (req, res) => {
  const { doctorId } = req.params
  req.body.doctor = doctorId
  req.body.user = req.user.userId

  const alreadyReviewed = await Review.findOne({ user: req.user.userId, doctor: doctorId })
  if (alreadyReviewed) {
    throw new CustomError.BadRequestError('You have already submitted a review for this doctor')
  }

  const review = await Review.create(req.body)

  await Doctor.findByIdAndUpdate(doctorId, { $push: { reviews: review._id } })

  res.status(StatusCodes.CREATED).json({ status: true, message: 'Review submitted successfully', review })
}

const updateReview = async (req, res) => {
  const { id: reviewId } = req.params
  const { rating, reviewText } = req.body
  const review = await Review.findOne({ _id: reviewId })
  if (!review) {
    throw new CustomError.NotFoundError(`No review with id: ${reviewId}`)
  }

  checkPermissions(req.user, review.user)
  review.rating = rating
  review.reviewText = reviewText
  await review.save()
  res.status(StatusCodes.OK).json({ review })
}
const deleteReview = async (req, res) => {
  const { id: reviewId } = req.params
  const review = await Review.findOne({ _id: reviewId })
  if (!review) {
    throw new CustomError.NotFoundError(`No review with id: ${reviewId}`)
  }

  checkPermissions(req.user, review.user)
  await review.deleteOne()
  res.status(StatusCodes.OK).json({ message: 'Review deleted successfully' })
}

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
}
