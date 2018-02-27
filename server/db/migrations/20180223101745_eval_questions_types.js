exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('eval_question_types', (table) => {
    table.increments('id').primary()
    table.string('type')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('eval_question_types')
}
