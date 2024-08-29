const BadRequestError = require('./bad-request')
const CustomApiError = require('./custom-api')
const NotFoundError = require('./not-found')
const UnauthenticatedError = require('./unauthenticated')
const UnauthorizedError = require('./unauthorized')

module.exports = {
  CustomApiError,
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
}
