exports.up = (knex, Promise) => {
  return knex.schema.createTable('quiz_questions', (table) => {
    table.increments('id').primary()
    table.string('question')
    table.integer('question_types').references('quiz_questions_types.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('quiz_questions')
}
