exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('profile_tags', table => {
    table.increments('id').primary()
    table.string('tag')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('profile_tags')
}
