const express = require('express')
require('dotenv').config()
require('express-async-errors')

// middleware built in import
const cors = require('cors')
const cookieParser = require('cookie-parser')

// import Database
const connectDB = require('./db/connect')

// import middlewares error handlers
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express()

// import routes
const authRouter = require('./routes/authRoutes')

// set up security
const corsOptions = {
  origin: true,
}
app.use(cors(corsOptions))

// middleware built in
app.use(express.json())
app.use(cookieParser())

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Path routes
app.use('/api/v1/auth', authRouter)

// middleware not found && error handler...
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port: ${port}`))
  } catch (error) {
    console.log(`Something went wrong - ${error}`)
  }
}

start()
