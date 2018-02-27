exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('tasks', table => {
    table.increments('id').primary()
    table.integer('assignment_id').references('assignments.id')
    table.string('description')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}
