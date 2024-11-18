const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, role: user.role, photo: user.photo, bloodType: user.bloodType }
}

module.exports = createTokenUser
