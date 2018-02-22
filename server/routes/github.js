const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')()
const expressSession = require('express-session')
const GitHubStrategy = require('passport-github').Strategy

const {findOrCreateGitHubUser} = require('../db/users')
const token = require('../auth/token')

const session = expressSession({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: true
})

const router = express.Router()

router.use(cookieParser)
router.use(passport.initialize())
router.use(passport.session())

passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_AUTH_ID,
    clientSecret: process.env.GITHUB_AUTH_SECRET,
    callbackURL: 'http://127.0.0.1:3000/api/v1/auth/github/callback'
  },
  (accessToken, refreshToken, gitHubProfile, cb) => {
    // console.log('accessToken:', accessToken)
    // console.log('refreshToken:', refreshToken)
    // console.log('gitHubProfile:', gitHubProfile)
    findOrCreateGitHubUser(gitHubProfile, cb)
  }
))

router.get('/', session, passport.authenticate('github'))
router.get('/callback', session, token.issueFromGitHub)

module.exports = router
