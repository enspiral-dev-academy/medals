const express = require('express')
const router = express.Router()

const db = require('../db/db')
// const data = require('./sprints.json')
// const assignments = require('./assignments.json')

router.get('/', (req, res) => {
  db.getSprints()
    .then(sprints => {
      res.json(sprints)
    })
})

router.get('/:number', (req, res) => {
  db.getAssignmentsBySprintId(req.params.number)
    .then(assignments => {
      res.json(assignments)
    })
})

module.exports = router
