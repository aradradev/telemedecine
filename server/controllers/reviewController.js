const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const Doctor = require('../models/Doctor')
const Review = require('../models/Review')

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({})
    .populate({ path: 'doctor', select: 'name gender specialization' })
    .populate({ path: 'user', select: 'name gender' })
  res.status(StatusCodes.OK).json({ reviews })
}
const createReview = async (req, res) => {
  res.send('create review')
}
const updateReview = async (req, res) => {
  res.send('update review')
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
