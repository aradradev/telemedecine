const express = require('express')
const { getAllDoctors, updateDoctor, deleteDoctor, getSingleDoctor } = require('../controllers/doctorController')

const { authenticateUser } = require('../middleware/authentication')

const router = express.Router()

router.route('/').get(authenticateUser, getAllDoctors)

router.route('/:id').get(getSingleDoctor).patch(updateDoctor).delete(deleteDoctor)

module.exports = router
