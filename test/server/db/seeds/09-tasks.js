exports.seed = (knex, Promise) => {
  return knex('tasks').insert([
    {id: 1, description: 'You\'re ready to start work on an assignment? Drag it to the \'In progress\' column.', assignment_id: 1},
    {id: 2, description: 'This is a task. check it when it\'s complete. You can check this one now. Nice.', assignment_id: 1},
    {id: 3, description: 'When all the tasks are checked, move the assignment to the \'Done\' column! Do that now. Awesome.', assignment_id: 1},
    {id: 4, description: 'We\'ll check your work then move it to the \'Reviewed by EDA\' column when we\'re satisfied.', assignment_id: 1},
    {id: 5, description: 'Ok. Onto the real assignments now... have fun!', assignment_id: 1},
    {id: 6, description: 'Start Toggle', assignment_id: 3},
    {id: 7, description: 'Technical Blog', assignment_id: 4},
    {id: 8, description: 'Javascript Basics on Free Code Camp', assignment_id: 2},
    {id: 9, description: 'Download Skeleton Framework', assignment_id: 3},
    {id: 10, description: 'Export Toggle Timesheet', assignment_id: 4}
  ])
}
