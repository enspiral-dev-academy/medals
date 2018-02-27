const connection = require('./connection')
// const hash = require('../auth/hash')

module.exports = {
  getUserById
}

function getUserById (id, conn) {
  const db = conn || connection
  return db('user_profiles')
    .join('users', 'user_profiles.user_id', 'users.id')
    .select()
}
