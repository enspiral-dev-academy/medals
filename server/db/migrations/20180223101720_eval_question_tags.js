exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('eval_question_tags', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('eval_questions.id')
    table.integer('tag_id').references('eval_tags.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('eval_question_tags')
}
