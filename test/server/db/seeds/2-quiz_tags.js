exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('quiz_tags').del()
    .then(() => {
      // Inserts seed entries
      return knex('quiz_tags').insert([
        {id: 1, tag: 'JavaScript'},
        {id: 2, tag: 'React'},
        {id: 3, tag: 'Redux'},
        {id: 4, tag: 'Callback Functions'},
        {id: 5, tag: 'APIs'},
        {id: 6, tag: 'Express'}
      ])
    })
}
