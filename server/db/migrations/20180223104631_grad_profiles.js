exports.up = (knex, Promise) => {
  return knex.schema.createTable('grad_profiles', table => {
    table.increments('id')
    table.string('aboutMe')
    table.string('location')
    table.string('githubLink')
    table.string('portfolio')
    table.string('previousExperience')
    table.string('interests')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('grad_profiles')
}
