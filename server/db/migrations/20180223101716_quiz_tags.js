exports.up = (knex, Promise) => {
  return knex.schema.createTable('quiz_tags', (table) => {
    table.increments('id').primary()
    table.string('tag')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('quiz_tags')
}
