exports.up = (knex, Promise) => {
  return knex.schema.createTable('eval_questions', (table) => {
    table.increments('id').primary()
    table.string('question')
    table.integer('question_types').references('eval_questions_types.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('eval_questions')
}
