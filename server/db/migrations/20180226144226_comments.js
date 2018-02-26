exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('comments', table => {
    table.increments('id').primary()
    table.string('comment')
    table.integer('user_id').references('users.id')
    table.integer('assigned_task_id').references('assignedTasks.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('comments')
}
