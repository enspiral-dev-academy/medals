exports.up = (knex, Promise) => {
  return knex.schema.table('users', (table) => {
    table.boolean('is_approved')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.table('users', (table) => {
    table.dropColumn('is_approved')
  })
}
