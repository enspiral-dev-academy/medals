exports.up = (knex, Promise) => {
  return knex.schema.createTable('eval_questions_types', (table) => {
    table.increments('id').primary()
    table.string('type')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('eval_questions_types')
}
