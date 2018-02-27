exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('grad_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('grad_profiles').insert([
        {id: 1, aboutMe: 'Who are you, and what do you care about?', location: 'e.g. Auckland, NZ', githubLink: 'https://github.com/[your-github-profile-url]', linkedinLink: 'https://nz.linkedin.com/[your-linkedin-profile-url]', portfolioLinkOne: 'Project URL', portfolioLinkTwo: 'Project URL', portfolioLinkThree: 'Project URL', previousExperience: 'Where have you worked or studied before?', interests: 'What do you love doing outside of coding?'}
      ])
    })
}
