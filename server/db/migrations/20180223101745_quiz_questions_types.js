exports.up = (knex, Promise) => {
  return knex.schema.createTable('quiz_questions_types', (table) => {
    table.increments('id').primary()
    table.string('type')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('quiz_questions_types')
}
