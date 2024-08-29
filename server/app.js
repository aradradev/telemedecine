const express = require('express')
require('dotenv').config()
require('express-async-errors')

// import Database
const connectDB = require('./db/connect')

const app = express()

// middleware
app.use(express.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port: ${port}`))
  } catch (error) {
    console.log(`Something went wrong - ${error}`)
  }
}

start()
