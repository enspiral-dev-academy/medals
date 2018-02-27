exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('user_profiles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('first_name')
    table.string('preferred_name')
    table.string('surname')
    table.string('profile_pic')
    table.string('email')
    table.string('phone')
    table.string('bio')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user_profiles')
}
