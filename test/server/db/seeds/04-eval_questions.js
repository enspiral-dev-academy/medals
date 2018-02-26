exports.seed = (knex, Promise) => {
  return knex('eval_questions').insert([
    {id: 1, question: 'Who created JavaScript?', question_types: 1},
    {id: 2, question: 'Which technology makes use of a Virtual DOM?', question_types: 1}
  ])
}
