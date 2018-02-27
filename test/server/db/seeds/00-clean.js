exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('comments')()
    .then(empty('eval_tags'))
    .then(empty('user_profiles'))
    .then(empty('assignedTasks'))
    .then(empty('tasks'))
    .then(empty('assignments'))
    .then(empty('sprints'))
    .then(empty('users'))
}
