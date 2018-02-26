const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()
const development = require('../db/knexfile').development
const knex = require('knex')(development)

router.use(bodyParser.json())

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
    .then((questions) => {
      res.send(questions)
    })
})

const getQuestions = (tag) => {
  return knex('quiz_questions')
    .join('quiz_questions_tags', 'quiz_questions_tags.question_id', '=', 'quiz_questions.id')
    .join('quiz_tags', 'quiz_questions_tags.tag_id', '=', 'quiz_tags.id')
    .join('quiz_responses', 'quiz_questions.id', '=', 'quiz_responses.question_id')
    .where('quiz_tags.tag', tag)
}

module.exports = router
