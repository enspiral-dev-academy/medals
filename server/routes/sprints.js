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

router.get('/assignments/:id', (req, res) => {
  db.getTasksByAssignmentId(req.params.id)
    .then(tasks => {
      res.json(tasks)
    })
})

router.get('/:number', (req, res) => {
  db.getAssignmentsBySprintId(req.params.number)
    .then(assignments => {
      res.json(assignments)
    })
})

module.exports = router
