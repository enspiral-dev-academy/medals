const knex = require('knex')
const config = require('./knexfile').development

const devDb = knex(config)

module.exports = {
  getUsers,
  getSprints,
  getAssignmentsBySprintId,
  getTasksByAssignmentId,
  getAssignedTasks
}

function getUsers () {
  return devDb('users')
}

function getSprints () {
  return devDb('sprints')
}

function getAssignmentsBySprintId (sprintId) {
  return devDb('sprints')
    .join('assignments', 'sprints.id', 'assignments.sprint_id')
    .where('sprints.id', sprintId) // where id matches - only return matching sprint
    .select('sprints.id', 'assignments.title')
}

function getTasksByAssignmentId (assignmentId) {
  return devDb('assignments')
    .join('tasks', 'assignments.id', 'tasks.assignment_id')
    .where('assignments.id', assignmentId)
    .select('assignments.id', 'tasks.description')
}

function getAssignedTasks (userId) {
  return devDb('tasks')
    .join('assigned_tasks', 'users.id', 'assigned_tasks.user_id')
    .join('assigned_tasks', 'tasks.id', 'assigned_tasks.task_id')
    .where('assigned_tasks.user_id', userId)
    .select('tasks.id', 'users.id', 'assigned_tasks.is_complete', 'assigned_tasks.evidence')
}
