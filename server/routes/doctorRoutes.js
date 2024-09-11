const express = require('express')
const { getAllDoctors, updateDoctor, deleteDoctor, getSingleDoctor } = require('../controllers/doctorController')

const router = express.Router()

router.route('/').get(getAllDoctors)

router.route('/:id').get(getSingleDoctor).patch(updateDoctor).delete(deleteDoctor)

module.exports = router
