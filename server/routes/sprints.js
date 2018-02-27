const express = require('express')

const router = express.Router()

const db = require('../db/self-assignments')

router.get('/', (req, res) => {
  db.getSprints()
    .then(sprints => {
      sprints.forEach(sprint => {
        sprint.assignments = []
      })
      db.getAssignments()
        .then(assignments => {
          assignments.map(assignment => {
            let sprint = sprints.find(sprint => {
              return sprint.id === assignment.sprint_id
            })
            sprint.assignments.push(assignment)
          })
          return res.json(sprints)
        })
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})

router.post('/', (req, res) => {
  db.getTasksBySprintId(Number(req.body.id))
    .then(taskIds => {
      const tasks = taskIds.map(taskId => {
        return {
          user_id: 1,
          task_id: taskId.id,
          complete: false
        }
      })
      db.populateAssignedTasks(tasks)
        .then(() => {
          res.status(200).send({})
        })
    })
    .catch(() => {
      res.status(500).send({
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
