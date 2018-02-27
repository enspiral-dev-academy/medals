exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_profiles')
    .then(function () {
      // Inserts seed entries
      return knex('user_profiles').insert([
        {id: 1, user_id: 1, firstName: 'Jules', preferredName: 'Jewels', surname: 'Family', profilePic: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Jules_Verne_%28cropped%29.png', email: 'jules80@roundtheworld.com', phone: '+64 123 456 789', bio: 'Famous French Fella'
        }
      ])
    })
}
