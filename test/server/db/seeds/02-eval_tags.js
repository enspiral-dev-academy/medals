exports.seed = (knex, Promise) => {
  return knex('eval_tags').insert([
    {id: 1, tag: 'JavaScript'},
    {id: 2, tag: 'React'},
    {id: 3, tag: 'Redux'},
    {id: 4, tag: 'Callback Functions'},
    {id: 5, tag: 'APIs'},
    {id: 6, tag: 'Express'}
  ])
}
