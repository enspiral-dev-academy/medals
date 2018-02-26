exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('users')()
    .then(empty('eval_responses')())
    .then(empty('eval_questions_tags')())
    .then(empty('eval_questions')())
    .then(empty('eval_questions_types')())
    .then(empty('eval_tags')())
}
