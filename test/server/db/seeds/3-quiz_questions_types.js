exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('quiz_questions_types').del()
    .then(() => {
      // Inserts seed entries
      return knex('quiz_questions_types').insert([
        {id: 1, type: 'multichoice'},
        {id: 2, type: 'true/false'},
        {id: 3, type: 'fill in the gap'},
        {id: 4, type: 'matching lists'}
      ])
    })
}
