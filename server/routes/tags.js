const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const development = require('../db/knexfile').development
const knex = require('knex')(development)

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  getList()
    .then(function (tags) {
      res.send({tags})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

const getList = () => {
  return knex('eval_tags').select('tag')
}

router.get('/:tags', (req, res) => {
  const questionTag = req.params.tags
  getQuestions(questionTag)
    .then((questions) => {
      res.send(questions)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

const getQuestions = (tag) => {
  return knex('eval_questions')
    .join('eval_questions_tags', 'eval_questions_tags.question_id', '=', 'eval_questions.id')
    .join('eval_tags', 'eval_questions_tags.tag_id', '=', 'eval_tags.id')
    .join('eval_responses', 'eval_questions.id', '=', 'eval_responses.question_id')
    .where('eval_tags.tag', tag)
}
