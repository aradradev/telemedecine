const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({})

module.exports = mongoose.model('Doctor', DoctorSchema)
