const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()
const development = require('../db/knexfile').development
const knex = require('knex')(development)

router.use(bodyParser.json())

router.get('/', (req, res) => {
  getList()
    .then(function (tags) {
      res.send({tags})
    })
  // do we need a catch?
})

const getList = () => {
  return knex('eval_tags').select('tag')
}

router.get('/:tags', (req, res) => {
  const questionTag = req.params.tag
  getQuestions(questionTag)
    .then((questions) => {
      res.send(questions)
    }
    )
})

// router.get('/:tag', (req, res) => {
//   const questionTag = req.params.tag
//   getQuestions(questionTag)
//     .then(function (questions) {
//       res.send({questions})
//     })
// })

const getQuestions = (tag) => {
  return knex('eval_questions')
    .join('eval_questions_tags', 'eval_questions_tags.question_id', '=', 'eval_questions.id')
    .join('eval_tags', 'eval_questions_tags.tag_id', '=', 'eval_tags.id')
    .join('eval_responses', 'eval_questions.id', '=', 'eval_responses.question_id')
    .where('eval_tags.tag', tag)
}

module.exports = router
