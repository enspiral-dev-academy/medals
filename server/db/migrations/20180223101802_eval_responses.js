exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('eval_responses', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('eval_questions.id')
    table.string('response')
    table.string('reason')
    table.boolean('key')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('eval_responses')
}
