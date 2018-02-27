const connection = require('./connection')

module.exports = {
  getQuestionById,
  getTagByName,
  getQuizTypeByName,
  getQuestionResponsesById
}

function getQuestionById (id, conn) {
  const db = conn || connection
  return db('eval_questions')
    .select('id', 'question')
    .where('id', id)
    .first()
}

function getTagByName (tag, conn) {
  const db = conn || connection
  return db('eval_tags')
    .select()
    .where('tag', tag)
    .first()
}

function getQuizTypeByName (type, conn) {
  const db = conn || connection
  return db('eval_question_types')
    .select()
    .where('type', type)
    .first()
}

function getQuestionResponsesById (id, conn) {
  const db = conn || connection
  return db('eval_responses')
    .select('id', 'response')
    .where('question_id', id)
}
