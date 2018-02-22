const express = require('express')
const router = express.Router()

// const db = require('../db/db')
const data = require('./sprints.json')
const assignments = require('./assignments.json')

router.get('/', (req, res) => {
  // const sprints = db.getSprints()
  // console.log(sprints)
  res.json(data)
})

router.get('/:number', (req, res) => {
  // const assignments = db.getAssignments()
  res.json(assignments)
})
module.exports = router
