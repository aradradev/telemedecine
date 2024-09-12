const express = require('express')
const { getAllReviews, createReview, updateReview, deleteReview } = require('../controllers/reviewController')
const { authenticateUser, authorizedPermissions } = require('../middleware/authentication')
const router = express.Router({ mergeParams: true })

router.route('/').get(getAllReviews).post(authenticateUser, authorizedPermissions('patient'), createReview)
router.route('/:id').patch(authenticateUser, updateReview).delete(authenticateUser, deleteReview)

module.exports = router
