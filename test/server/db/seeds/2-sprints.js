exports.seed = (knex, Promise) => {
  return knex('sprints').insert([
    {id: 1, number: 0},
    {id: 2, number: 1},
    {id: 3, number: 2},
    {id: 4, number: 3},
    {id: 5, number: 4}
  ])
}
