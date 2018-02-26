const connection = require('./connection')
const hash = require('../auth/hash')

module.exports = {
  createUser,
  userExists,
  getAllUsers,
  getUserById,
  getUserByName,
  updateUser,
  findOrCreateGitHubUser,
  updateGradProfile,
  getGradProfileById
}

function createUser (username, password, conn, ghid = null) {
  const db = conn || connection
  return userExists(username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => {
      // At this time, only students will be GitHub users.
      // When the user is a student, password will be null and ghid will have a
      // value. When the user is staff or an employer, password will have a
      // value, and ghid will be undefined.
      // TODO: extract this logic into a function so the behaviour is more explicit.
      const passwordHash = hash.generate(password || ghid)
      return db('users')
        .insert({username, hash: passwordHash, ghid})
        .then(ids => {
          return db('users')
            .where('id', ids[0] || 0)
            .first()
        })
    })
}

function getAllUsers (conn) {
  const db = conn || connection
  return db('users')
    .select()
}

function userExists (username, conn) {
  const db = conn || connection
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserById (id, conn) {
  const db = conn || connection
  return db('users')
    .select('id', 'username')
    .where('id', id)
    .first()
}

function getGradProfileById (id, conn) {
  const db = conn || connection
  return db('grad_profiles')
    .select()
    .where('id', id)
    .first()
}

function getUserByName (username, conn) {
  const db = conn || connection
  return db('users')
    .select()
    .where('username', username)
    .first()
}

function updateUser (id, username, currentPassword, newPassword, conn) {
  const db = conn || connection
  return getUserByName(username, db)
    .then(user => {
      if (!user || !hash.verify(user.hash, currentPassword)) {
        return Promise.reject(new Error('Username password match not found'))
      }
      return Promise.resolve(user)
    })
    .then(user => {
      const newPasswordHash = hash.generate(newPassword)
      if (id !== user.id) Promise.reject(new Error('Username and ID mismatch'))
      return db('users')
        .update({username, hash: newPasswordHash})
        .where('id', user.id)
    })
}

function updateGradProfile (updatedUser, conn) {
  const db = conn || connection
  return db('grad_profiles')
    .where('id', updatedUser.userId)
    .update({
      aboutMe: updatedUser.aboutMe,
      location: updatedUser.location,
      githubLink: updatedUser.githubLink,
      linkedinLink: updatedUser.linkedinLink,
      portfolioLinkOne: updatedUser.portfolioLinkOne,
      portfolioLinkTwo: updatedUser.portfolioLinkTwo,
      portfolioLinkThree: updatedUser.portfolioLinkThree,
      previousExperience: updatedUser.previousExperience,
      interests: updatedUser.interests
    })
}

function findOrCreateGitHubUser (gitHubProfile, cb, conn) {
  const db = conn || connection
  return db('users')
    .select('id', 'username')
    .where('ghid', gitHubProfile.id)
    .first()
    .then(user => {
      if (user) {
        cb(null, user)
      } else {
        createUser(gitHubProfile.username, null, conn, gitHubProfile.id)
          .then(user => cb(null, user))
      }
    })
    .catch(err => cb(err))
}
