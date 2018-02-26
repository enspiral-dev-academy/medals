exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('users')()
}
