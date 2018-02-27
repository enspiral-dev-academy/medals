exports.seed = (knex, Promise) => {
  return knex('eval_question_types').insert([
    {id: 1, type: 'multichoice'},
    {id: 2, type: 'true/false'},
    {id: 3, type: 'fill in the gap'},
    {id: 4, type: 'matching lists'}
  ])
}
