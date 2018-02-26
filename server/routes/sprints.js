const express = require('express')
const router = express.Router()

const db = require('../db/self-assignments')

router.get('/', (req, res) => {
  db.getSprints()
    .then(sprints => {
      res.json(sprints)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})

router.get('/assignments/:id', (req, res) => {
  db.getTasksByAssignmentId(req.params.id)
    .then(tasks => {
      res.json(tasks)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})

router.get('/:number', (req, res) => {
  db.getAssignmentsBySprintId(req.params.number)
    .then(assignments => {
      res.json(assignments)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})

module.exports = router
