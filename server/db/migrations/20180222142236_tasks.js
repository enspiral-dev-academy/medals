exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('tasks', table => {
    table.increments('id').primary()
    table.string('description')
    table.integer('assignment_id').references('assignments.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}
