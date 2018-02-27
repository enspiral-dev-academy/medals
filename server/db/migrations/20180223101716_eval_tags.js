exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('eval_tags', (table) => {
    table.increments('id').primary()
    table.string('tag')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('eval_tags')
}
