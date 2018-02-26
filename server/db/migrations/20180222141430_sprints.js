exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('sprints', table => {
    table.increments('id').primary()
    table.integer('number')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('sprints')
}
