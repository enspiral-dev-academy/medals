const express = require('express')

const db = require('../db/tags')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getList()
    .then(tags => {
      res.send({tags})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:tags', (req, res) => {
  const questionTag = req.params.tags
  const questions = db.getQuestionsByTag(questionTag)
  const responses = db.getAllResponses()

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
