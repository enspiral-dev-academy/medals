const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/user_profiles')
const token = require('../auth/token')

const router = express.Router()

router.use(bodyParser.json())

module.exports = router

// GET /users
router.get('/', token.decode, (req, res) => {
  db.getAllUsers()
    .then(allUsers => {
      res.json(allUsers)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

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

router.post('/update', (req, res) => {
  const 
})