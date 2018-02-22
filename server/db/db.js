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

function getAssignmentsBySprintId (sprintId, conn) {
  return devDb('sprints')
    .join('assignments', 'sprints.id', 'assignments.sprint_id')
    .where('sprints.id', sprintId) // where id matches - only return matching sprint
    .select('sprints.id', 'assignments.title')
}

function getTasksByAssignmentId (assignmentId, conn) {
  return devDb('assignments')
    .join('tasks', 'assignments.id', 'tasks.assignment_id')
    .where('assignments.id', assignmentId)
    .select('assignments.id', 'tasks.description')
}

function getAssignedTasks (userId, taskId, conn) {
  return devDb('tasks')
    .join('assignedTasks', 'tasks.id', 'assignedTasks.task_id')
    .join('users', 'users.id', 'assignedTasks.user_id')
    .where('assignedTasks.user_id', userId).andWhere('assignedTasks.task_id', taskId)
    .select()
}
