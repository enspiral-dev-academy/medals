exports.seed = (knex, Promise) => {
  // return Promise.resolve()
  const empty = table => () => knex(table).del()
  return empty('assignedTasks')()
    .then(empty('comments'))
    .then(() => empty('tasks')())
    .then(() => empty('assignments')())
    .then(() => empty('sprints')())
    .then(() => empty('users')())
  // return knex('users').del()
}
