exports.seed = (knex, Promise) => {
  return knex('assigned_tasks').insert([
    {id: 1, user_id: 1, task_id: 1, complete: false, evidence: 'www.link.com'},
    {id: 2, user_id: 2, task_id: 2, complete: true, evidence: 'See my blog'},
    {id: 3, user_id: 3, task_id: 3, complete: false, evidence: 'Great Job'},
    {id: 4, user_id: 4, task_id: 4, complete: false, evidence: '1000 wpm'}
  ])
}
