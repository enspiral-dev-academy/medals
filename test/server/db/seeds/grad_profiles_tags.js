exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('grad_profiles_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('grad_profiles_tags').insert([
        {
          id: 1,
          grad_profiles_id: 1,
          profile_tags_id: 1
        },
        {
          id: 2,
          grad_profiles_id: 1,
          profile_tags_id: 2
        },
        {
          id: 3,
          grad_profiles_id: 1,
          profile_tags_id: 3
        }
      ])
    })
}
