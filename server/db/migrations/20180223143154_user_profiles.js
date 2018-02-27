exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('user_profiles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('firstName')
    table.string('preferredName')
    table.string('surname')
    table.string('profilePic')
    table.string('email')
    table.string('phone')
    table.string('bio')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user_profiles')
}
