exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('profile_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile_tags').insert([
        {
          id: 1,
          tag: 'React.JS'
        },
        {
          id: 2,
          tag: 'Redux.JS'
        },
        {
          id: 3,
          tag: 'SQL lite 3'
        },
        {
          id: 4,
          tag: 'Knex.JS'
        }
      ])
    })
}
