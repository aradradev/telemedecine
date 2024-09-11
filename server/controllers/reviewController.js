const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const Doctor = require('../models/Doctor')
const Review = require('../models/Review')
const { checkPermissions } = require('../utils')

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({})
    .populate({ path: 'doctor', select: 'name gender specialization' })
    .populate({ path: 'user', select: 'name gender' })
  res.status(StatusCodes.OK).json({ reviews })
}
const createReview = async (req, res) => {
  const { id: doctorId } = req.body
  const isValidDoctor = await Doctor.findOne({ _id: doctorId })
  if (!isValidDoctor) {
    throw new CustomError.NotFoundError(`No Doctor with id: ${doctorId}`)
  }

  req.body.user = req.user.userId
  const alreadyReviewed = await Review.findOne({ user: req.user.userId, doctor: doctorId })
  if (alreadyReviewed) {
    throw new CustomError.BadRequestError('Already submitted review for this doctor')
  }
  const review = await Review.create(req.body)
  res.status(StatusCodes.CREATED).json({ review })
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
  res.send('delete review')
}

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
}
