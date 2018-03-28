exports.seed = (knex, Promise) => {
  return knex('eval_question_tags').insert([
    {id: 1, question_id: 1, tag_id: 1},
    {id: 2, question_id: 2, tag_id: 1},
    {id: 3, question_id: 2, tag_id: 2}
  ])
}
