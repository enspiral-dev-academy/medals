exports.up = (knex, Promise) => {
  return knex.schema.createTable('profile_tags', table => {
    table.increments('id').primary()
    table.string('tag')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profile_tags')
}
