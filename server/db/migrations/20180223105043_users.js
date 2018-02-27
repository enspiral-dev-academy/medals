exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('users', table => {
    table.increments('id').primary()
    table.string('ghid')
    table.string('username')
    table.binary('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('users')
}
