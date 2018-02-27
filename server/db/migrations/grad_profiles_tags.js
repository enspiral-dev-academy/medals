exports.up = (knex, Promise) => {
  return knex.schema.createTable('grad_profiles_tags', table => {
    table.increments('id').primary()
    table.integer('grad_profiles_id').references('grad_profiles.id')
    table.integer('profile_tags_id').references('profile_tags.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('grad_profiles_tags')
}
