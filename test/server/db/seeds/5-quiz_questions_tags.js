exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('quiz_questions_tags').del()
    .then(() => {
      // Inserts seed entries
      return knex('quiz_questions_tags').insert([
        {id: 1, question_id: 1, tag_id: 1},
        {id: 2, question_id: 2, tag_id: 1},
        {id: 3, question_id: 2, tag_id: 2}
      ])
    })
}
