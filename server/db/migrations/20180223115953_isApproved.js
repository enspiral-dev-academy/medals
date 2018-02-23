exports.up = (knex, Promise) => {
  return knex.schema.table('users', (table) => {
    table.boolean('isApproved')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.table('users', (table) => {
    table.dropColumn('isApproved')
  })
}
