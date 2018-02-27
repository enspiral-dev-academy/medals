const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/user-profiles')
const token = require('../auth/token')

const router = express.Router()

router.use(bodyParser.json())

module.exports = router

router.get('/:id', token.decode, (req, res) => {
  db.getProfileByUserId(Number(req.params.id))
    .then(profile => {
      res.json(profile)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/:id', token.decode, (req, res) => {
  db.editProfile(req.body, Number(req.params.id))
    .then(() => {
      res.status(202).end()
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})
