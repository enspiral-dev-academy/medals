exports.up = (knex, Promise) => {
  return knex.schema.createTable('quiz_questions_tags', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('quiz_questions.id')
    table.integer('tag_id').references('quiz_tags.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('quiz_questions_tags')
}
