exports.seed = (knex, Promise) => {
  return knex('assignments').insert([
    {id: 1, title: 'Assignment 1', sprint_id: 1},
    {id: 2, title: 'Assignment 2: Minesweeper', sprint_id: 1},
    {id: 3, title: 'Assignment 3', sprint_id: 1},
    {id: 4, title: 'Assignment 4', sprint_id: 1},
    {id: 5, title: 'Assignment 5', sprint_id: 1},
    {id: 6, title: 'Assignment 6', sprint_id: 1},
    {id: 7, title: 'Assignment 7', sprint_id: 1},
    {id: 8, title: 'Assignment 8', sprint_id: 1},
    {id: 9, title: 'Assignment 9', sprint_id: 1},
    {id: 10, title: 'Assignment 10', sprint_id: 1}
  ])
}
