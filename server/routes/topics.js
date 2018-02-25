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

router.get('/:topic', (req, res) => {
  const questionTopic = req.params.topic
  getQuestions(questionTopic)
    .then(function (questions) {
      res.send({questions})
    })
})

const getQuestions = (tag) => {
  return knex('quiz_questions')
    .join('quiz_questions_tags', 'quiz_questions_tags.question_id', '=', 'quiz_questions.id')
    .join('quiz_tags', 'quiz_questions_tags.tag_id', '=', 'quiz_tags.id')
    .where('quiz_tags.tag', tag)
}

module.exports = router
