const connection = require('./connection')
// const hash = require('../auth/hash')

module.exports = {
  getUserByName
}

function getUserById (id, conn) {
  const db = conn || connection
  return db('user_profiles')
    .join('users', 'user_profiles.username', 'users.username')
    .where('users.username')
    .select('user_profiles.id', 'user_profiles.firstName', 'user_profiles.')
}
