exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('sprints', table => {
    table.increments('id').primary()
    table.integer('number')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('sprints')
}
