exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('grad_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('grad_profiles').insert([
        {id: 1, aboutMe: 'Im a fun loving girl.', location: 'Auckland', github: 'https://github.com/ElyseWyatt', portfolio: 'https://twitter.com/?lang=en', previousExperience: 'Skydiving instructor, burlesque dancer, part-time cat show judge, mechanic', interests: 'Astrophysics'}
      ])
    })
}
