const express = require('express')
const bodyParser = require('body-parser')

const topics = require('../../client/components/assessments/topics.json') // will be a db eventually
const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  res.json(topics)
  // do we need a catch?
})

module.exports = router
