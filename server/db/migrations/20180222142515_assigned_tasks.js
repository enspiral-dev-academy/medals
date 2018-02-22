exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('assigned_tasks', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('task_id').references('tasks.id')
    table.boolean('is_complete')
    table.string('evidence')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('assigned_tasks')
}
