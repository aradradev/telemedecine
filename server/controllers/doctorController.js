const Doctor = require('../models/Doctor')

const getAllDoctors = async (req, res) => {
  res.send('get all doctors')
}
const getSingleDoctor = async (req, res) => {
  res.send('get single doctor')
}
const showCurrentDoctor = async (req, res) => {
  res.send('show current doctor')
}
const updateDoctor = async (req, res) => {
  res.send('update doctor')
}

module.exports = {
  getAllDoctors,
  getSingleDoctor,
  showCurrentDoctor,
  updateDoctor,
}
