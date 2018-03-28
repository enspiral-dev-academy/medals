const jwt = require('jsonwebtoken')
const passport = require('passport')
const verifyJwt = require('express-jwt')

const db = require('../db/users')
const baseUrl = require('../../shared/baseUrl')
const jwtTestSecret = require('../../test/server/routes/jwt-test-secret')

module.exports = {
  issue,
  decode,
  issueFromGitHub,
  createToken // exported for testing
}

function issue (req, res) {
  db.getUserByName(req.body.username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function issueFromGitHub (req, res, next) {
  passport.authenticate('github', (err, user, info) => {
    if (err) {
      return res.status(500).json({
        message: 'Authentication failed due to a server error',
        info: err.message
      })
    }

    if (!user) {
      return res.json({
        message: 'Authentication failed',
        info: info.message
      })
    }
    const token = createToken(user, process.env.JWT_SECRET)
    res.redirect(`${baseUrl}/?token=${token}`)
  })(req, res, next)
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}

function getSecret (req, payload, done) {
  const secret = process.env.JWT_SECRET || jwtTestSecret
  if (secret === jwtTestSecret) {
    // console.warn('ATTENTION: Using the JWT Test secret')
  }
  done(null, secret)
}
