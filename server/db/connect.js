const mongoose = require('mongoose')

const connectDB = async (url) => {
  try {
    mongoose.connect(url)
    console.log('MongoDB Connected...')
  } catch (error) {
    console.log(`Something went wrong with the server - ${error}`)
  }
}

module.exports = connectDB
