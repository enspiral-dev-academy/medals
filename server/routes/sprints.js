const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  const sprints = db.getSprints()
  res.send(sprints)
})

module.exports = router
