exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('assignedTasks', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('task_id').references('tasks.id')
    table.boolean('complete')
    table.string('evidence')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('assignedTasks')
}
