const connection = require('./connection')
// const hash = require('../auth/hash')

module.exports = {
  getProfileByUserId,
  editProfile
}

function getProfileByUserId (id, conn) {
  const db = conn || connection
  return db('user_profiles')
    .join('users', 'user_profiles.user_id', 'users.id')
    .where('users.id', id)
    .select()
    .first()
}

function editProfile (profileData, userId, conn) {
  const db = conn || connection
  const {firstName, preferredName, surname, profilePic, email, phone, bio} = profileData
  return db('user_profiles')
    .where('user_id', userId)
    .update({
      firstName: firstName,
      preferredName: preferredName,
      surname: surname,
      profilePic: profilePic,
      email: email,
      phone: phone,
      bio: bio
    })
}
