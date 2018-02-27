exports.seed = (knex, Promise) => {
  return knex('user_profiles').insert([
    {
      id: 1,
      user_id: 1,
      first_name: 'Jules',
      preferred_name: 'Jewels',
      surname: 'Family',
      profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Jules_Verne_%28cropped%29.png',
      email: 'jules80@roundtheworld.com',
      phone: '+64 123 456 789',
      bio: 'Famous French Fella'
    }
  ])
}
