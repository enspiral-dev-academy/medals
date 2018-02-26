exports.seed = (knex, Promise) => {
  return knex('assignments').insert([
    {id: 1, title: 'How to waffle', sprint_id: 1},
    {id: 2, title: 'Track time', sprint_id: 1},
    {id: 3, title: 'Command line and Github', sprint_id: 1},
    {id: 4, title: 'Create website blog', sprint_id: 1},
    {id: 5, title: 'Introduce yourself', sprint_id: 1},
    {id: 6, title: 'Udacity HTML CSS course 1', sprint_id: 2},
    {id: 7, title: 'Udacity Practice', sprint_id: 2},
    {id: 8, title: 'Udacity blog 1', sprint_id: 2},
    {id: 9, title: 'Udacity HTML CSS course 2', sprint_id: 2},
    {id: 10, title: 'Udacity blog 2', sprint_id: 2},
    {id: 11, title: 'Technical debt', sprint_id: 2}
  ])
}
