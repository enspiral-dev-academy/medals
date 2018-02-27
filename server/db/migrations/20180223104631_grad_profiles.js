exports.up = (knex, Promise) => {
  return knex.schema.createTable('grad_profiles', table => {
    table.increments('id').primary()
    table.string('aboutMe')
    table.string('location')
    table.string('githubLink')
    table.string('linkedinLink')
    table.string('portfolioLinkOne')
    table.string('portfolioLinkTwo')
    table.string('portfolioLinkThree')
    table.string('previousExperience')
    table.string('interests')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('grad_profiles')
}
