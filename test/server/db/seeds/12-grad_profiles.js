exports.seed = (knex, Promise) => {
  return knex('grad_profiles').insert([
    {
      id: 1,
      about_me: 'Who are you, and what do you care about?',
      location: 'e.g. Auckland, NZ',
      github_link: 'https://github.com/[your-github-profile-url]',
      linkedin_link: 'https://nz.linkedin.com/[your-linkedin-profile-url]',
      portfolio_link1: 'Project URL 1',
      portfolio_link2: 'Project URL 2',
      portfolio_link3: 'Project URL 3',
      previous_experience: 'Where have you worked or studied before?',
      interests: 'What do you love doing outside of coding?'
    }
  ])
}
