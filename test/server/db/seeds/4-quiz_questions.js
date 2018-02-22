exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('quiz_questions').del()
    .then(() => {
      // Inserts seed entries
      return knex('quiz_questions').insert([
        {id: 1, question: 'Who created JavaScript?', question_types: 1},
        {id: 2, question: 'Which technology makes use of a Virtual DOM?', question_types: 1}
      ])
    })
}
