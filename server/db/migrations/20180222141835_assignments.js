exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('assignments', table => {
    table.increments('id').primary()
    table.integer('sprint_id').references('sprints.id')
    table.string('title')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('assignments')
}
