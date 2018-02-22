exports.up = (knex, Promise) => {
  return knex.schema.createTable('quiz_responses', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('quiz_questions.id')
    table.string('response')
    table.string('reason')
    table.boolean('key')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('quiz_responses')
}
