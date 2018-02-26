exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comment: 'comment1', user_id: 1, assigned_task_id: 2},
        {id: 2, comment: 'comment1', user_id: 4, assigned_task_id: 1},
        {id: 3, comment: 'comment1', user_id: 2, assigned_task_id: 4},
        {id: 4, comment: 'comment1', user_id: 3, assigned_task_id: 3}
      ])
    })
}
