exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('grad_profile_tags', table => {
    table.increments('id').primary()
    table.integer('grad_profile_id').references('grad_profiles.id')
    table.integer('profile_tag_id').references('profile_tags.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('grad_profile_tags')
}
