exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('assigned_tasks', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('task_id').references('tasks.id')
    table.boolean('complete')
    table.string('evidence')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('assigned_tasks')
}
