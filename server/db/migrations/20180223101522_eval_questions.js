exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('eval_questions', (table) => {
    table.increments('id').primary()
    table.integer('question_type_id').references('eval_question_types.id')
    table.string('question')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('eval_questions')
}
