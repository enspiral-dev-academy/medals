const connection = require('./connection')
const hash = require('../auth/hash')

module.exports = {
  createUser,
  userExists,
  updateUser,
  getAllUsers,
  getUserById,
  getUserByName,
  updateGradProfile,
  getGradProfileById,
  getGradTagsById,
  updateUserApprovals,
  findOrCreateGitHubUser
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
    .select('id', 'username', 'ghid', 'is_approved as isApproved')
}

function updateUserApprovals (users, conn) {
  const db = conn || connection
  const promises = users.map(user => {
    return db('users')
      .update({is_approved: user.isApproved})
      .where('id', user.id)
  })
  return Promise.all(promises)
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
    .select(
      'id',
      'about_me as aboutMe',
      'location',
      'github_link as gitHubLink',
      'linkedin_link as linkedInLink',
      'portfolio_link1 as portfolioLink1',
      'portfolio_link2 as portfolioLink2',
      'portfolio_link3 as portfolioLink3',
      'previous_experience as previousExperience',
      'interests'
    )
    .where('id', id)
    .first()
}

function getGradTagsById (id, conn) {
  const db = conn || connection
  return db('grad_profiles')
    .join('grad_profile_tags', 'grad_profiles.id', '=', 'grad_profile_tags.grad_profile_id')
    .join('profile_tags', 'profile_tags.id', '=', 'grad_profile_tags.profile_tag_id')
    .where('grad_profiles.id', id)
    .select('profile_tags.tag')
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
      about_me: updatedUser.aboutMe,
      location: updatedUser.location,
      github_link: updatedUser.gitHubLink,
      linkedin_link: updatedUser.linkedInLink,
      portfolio_link1: updatedUser.portfolioLink1,
      portfolio_link2: updatedUser.portfolioLink2,
      portfolio_link3: updatedUser.portfolioLink3,
      previous_experience: updatedUser.previousExperience,
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
