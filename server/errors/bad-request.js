const { StatusCodes } = require('http-status-codes')
const CustomApiError = require('./custom-api')

class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message)
    this.StatusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError
