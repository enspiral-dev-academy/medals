exports.seed = (knex, Promise) => {
  return knex('assignments').insert([
    {id: 1, title: 'kimmis cookies', sprint_id: 1},
    {id: 2, title: 'julias jokes', sprint_id: 2},
    {id: 3, title: 'steves snacks', sprint_id: 3},
    {id: 4, title: 'stinas scones', sprint_id: 4}
  ])
}
