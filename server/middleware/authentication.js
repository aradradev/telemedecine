const CustomError = require('../errors')
const { isTokenValid } = require('../utils')

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token // Ensure this is signed and sent correctly
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }

  try {
    const { name, userId, role } = isTokenValid({ token }) // Destructure the decoded token
    req.user = { name, userId, role } // Ensure role is attached
    next()
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }
}

const authorizedPermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError('Forbidden')
    }
    next()
  }
}

module.exports = {
  authenticateUser,
  authorizedPermissions,
}