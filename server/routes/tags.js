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
  const questions = getQuestionsByTag(questionTag)
  const responses = getAllResponses()

  Promise.all([questions, responses])
    .then(([questionResult, answerResult]) => {
      const questionsWithResponses = questionResult.map(question => {
        return {
          ...question,
          responses: answerResult.filter(answer => question.question_id === answer.question_id)
        }
      })
      res.send(questionsWithResponses)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

const getQuestionsByTag = (tag) => {
  return knex('eval_questions')
    .join('eval_questions_tags', 'eval_questions_tags.question_id', '=', 'eval_questions.id')
    .join('eval_tags', 'eval_questions_tags.tag_id', '=', 'eval_tags.id')
    .where('eval_tags.tag', tag)
}

const getAllResponses = () => {
  return knex('eval_responses')
}
