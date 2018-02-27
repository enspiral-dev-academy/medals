const connection = require('./connection')
// const hash = require('../auth/hash')

module.exports = {
  getUserByName
}

function getUserByName (id, conn) {
  const db = conn || connection
  return db('user-profiles')
    .join('users', 'user-profiles.username', 'users.username')
    .where('users.username')
    .select('user-profiles.id', 'user-profiles.firstName', 'user-profiles.')
}
