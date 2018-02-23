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
      res.send({topics})
    })
  // do we need a catch?
})

const getList = () => {
  return knex('quiz_tags').select('tag')
}

router.get('/:id', (req, res) => {
  getQuestions()
    .then(function (ids) {
      res.send({ids})
    })
  // do we need a catch?
})

const getQuestions = () => {
  return knex('quiz_tags')
    .join('quiz_questions_tags', 'quiz_questions_tags.id', 'quiz_tags.id')
    .select('quiz_tags.id')
}

module.exports = router
