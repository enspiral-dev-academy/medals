// import {getTopics} from '../../client/actions/assessments'

const express = require('express')
const bodyParser = require('body-parser')

// const topics = require('../../client/components/assessments/topics.json') // will be a db eventually
const router = express.Router()
const development = require('../db/knexfile').development
const knex = require('knex')(development)

router.use(bodyParser.json())

// router.get('/', (req, res) => {
//   res.json(topics)
//   // do we need a catch?
// })

router.get('/', (req, res) => {
  getList()
    .then(function (topics) {
      console.log(topics)
      res.send({topics})
    })
  // do we need a catch?
})

const getList = () => {
  return knex('quiz_tags').select('tag')
}

module.exports = router
