exports.seed = (knex, Promise) => {
  return knex('tasks').insert([
    {id: 1, description: 'Make a github account', assignment_id: 1},
    {id: 2, description: 'Javascript Basics on Free Code Camp', assignment_id: 2},
    {id: 3, description: 'Start Toggle', assignment_id: 3},
    {id: 4, description: 'Cultural Blog', assignment_id: 4},
    {id: 5, description: 'Feedback', assignment_id: 2},
    {id: 6, description: 'Start Toggle', assignment_id: 3},
    {id: 7, description: 'Technical Blog', assignment_id: 4},
    {id: 8, description: 'Javascript Basics on Free Code Camp', assignment_id: 2},
    {id: 9, description: 'Download Skeleton Framework', assignment_id: 3},
    {id: 10, description: 'Export Toggle Timesheet', assignment_id: 4}
  ])
}
