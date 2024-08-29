const { StatusCodes } = require('http-status-codes')
const { CustomApiError } = require('./index')

class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message)
    this.status = StatusCodes.NOT_FOUND
  }
}

module.exports = NotFoundError
