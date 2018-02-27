exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('grad_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('grad_profiles').insert([
        {id: 1, aboutMe: 'Tell us about yourself!', location: 'e.g. Auckland, New Zealand', githubLink: 'https://github.com/[Your-Link-Here]', linkedinLink: 'https://linkedin.com/[Your-Link-Here]', portfolio: 'A link to your previous work.', previousExperience: 'Studied anywhere else? Had a previous career?', interests: 'What do you like doing outside of coding?'}
      ])
    })
}
