exports.seed = (knex, Promise) => {
  return knex('profile_tags').insert([
    {id: 1, tag: 'React.JS'},
    {id: 2, tag: 'Redux.JS'},
    {id: 3, tag: 'SQLite 3'},
    {id: 4, tag: 'Knex.JS'}
  ])
}
