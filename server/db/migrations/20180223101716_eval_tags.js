exports.up = (knex, Promise) => {
  return knex.schema.createTable('eval_tags', (table) => {
    table.increments('id').primary()
    table.string('tag')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('eval_tags')
}
