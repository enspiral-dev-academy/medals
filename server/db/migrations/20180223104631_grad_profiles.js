exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('grad_profiles', table => {
    table.increments('id').primary()
    table.string('about_me')
    table.string('location')
    table.string('github_link')
    table.string('linkedin_link')
    table.string('portfolio_link1')
    table.string('portfolio_link2')
    table.string('portfolio_link3')
    table.string('previous_experience')
    table.string('interests')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('grad_profiles')
}
