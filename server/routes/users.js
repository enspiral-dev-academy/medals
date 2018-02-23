const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

router.use(bodyParser.json())

module.exports = router

// GET /users/:id
router.get('/:id', token.decode, (req, res) => {
  db.getUserById(Number(req.params.id))
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET a grads profile from /users/:id
router.get('/grad/:id', token.decode, (req, res) => {
  db.getGradProfileById(Number(req.params.id))
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// PUT /users/:id
router.put('/:id', token.decode, (req, res) => {
  const id = Number(req.params.id)
  const {username, currentPassword, newPassword} = req.body
  db.updateUser(id, username, currentPassword, newPassword)
    .then(() => {
      res.status(202).end()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/editedProfile', token.decode, (req, res) => {
  // Once db is created may need to use grad-profiles.js
  db.updateGradProfile({id: 1, aboutMe: 'about', location: 'NZ', github: 'github.com', portfolio: 'github and shit', previousExperience: 'worked', interests: 'interests'})
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})
