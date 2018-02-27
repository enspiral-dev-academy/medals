exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('assignment_comments', table => {
    table.increments('id').primary()
    table.integer('assigned_task_id').references('assigned_tasks.id')
    table.integer('user_id').references('users.id')
    table.string('comment')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('assignment_comments')
}
