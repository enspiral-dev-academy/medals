exports.up = (knex, Promise) => {
  return knex.schema.createTable('eval_questions_tags', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('eval_questions.id')
    table.integer('tag_id').references('eval_tags.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('eval_questions_tags')
}
