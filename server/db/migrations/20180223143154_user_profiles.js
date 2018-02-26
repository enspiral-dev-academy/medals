exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('user_profile', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('firstName')
    table.string('preferredName')
    table.string('surname')
    table.string('profilePic')
    table.string('email')
    table.string('bio')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user_profile')
}
