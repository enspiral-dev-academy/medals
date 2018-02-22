exports.seed = (knex, Promise) => {
  return knex('tasks').insert([
    {id: 1, description: 'hello', assignment_id: 1},
    {id: 2, description: 'goodbye', assignment_id: 2},
    {id: 3, description: 'smiles', assignment_id: 3},
    {id: 4, description: 'rainbows', assignment_id: 4}
  ])
}
