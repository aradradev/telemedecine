const mongoose = require('mongoose')

const connectDB = async (url) => {
  mongoose.connect(url)
  console.log('MongoDB Connected...')
}

module.exports = connectDB
