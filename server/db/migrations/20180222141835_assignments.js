exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('assignments', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('sprint_id').references('sprints.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('assignments')
}
