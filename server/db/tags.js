const connection = require('./connection')

module.exports = {
  getList,
  getAllResponses,
  getQuestionsByTag
}

function getList (conn) {
  const db = conn || connection
  return db('eval_tags').select('tag')
}

function getQuestionsByTag (tag, conn) {
  const db = conn || connection
  return db('eval_questions')
    .join('eval_question_tags', 'eval_question_tags.question_id', '=', 'eval_questions.id')
    .join('eval_tags', 'eval_question_tags.tag_id', '=', 'eval_tags.id')
    .where('eval_tags.tag', tag)
}

function getAllResponses (conn) {
  const db = conn || connection
  return db('eval_responses')
}
