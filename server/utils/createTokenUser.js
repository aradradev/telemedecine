const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, role: user.role, photo: user.photo }
}

module.exports = createTokenUser
