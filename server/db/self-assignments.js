const connection = require('./connection')

module.exports = {
  getSprints,
  getAssignments,
  getUserById,
  getSprintById,
  getAssignmentsBySprintId,
  getTasksBySprintId,
  getTasksByAssignmentId,
  populateAssignedTasks,
  getAssignedTasks,
  getCommentsByAssignedTaskID,
  createComment,
  getAssignedTasksByAssignmentId
}

function getSprints (conn) {
  const db = conn || connection
  return db('sprints')
    .select()
}

function getAssignments (conn) {
  const db = conn || connection
  return db('assignments')
    .select()
}

function getUserById (userId, conn) {
  const db = conn || connection
  return db('users')
    .where('users.id', userId)
    .select()
    .first()
}

function getSprintById (sprintId, conn) {
  const db = conn || connection
  return db('sprints')
    .where('sprints.id', sprintId)
    .select()
    .first()
}

function getAssignmentsBySprintId (sprintId, conn) {
  const db = conn || connection
  return db('sprints')
    .join('assignments', 'sprints.id', 'assignments.sprint_id')
    .where('sprints.id', sprintId)
    .select('sprints.id', 'assignments.title')
}

function getTasksBySprintId (sprintId, conn) {
  const db = conn || connection
  return db('assignments')
    .join('tasks', 'assignments.id', 'tasks.assignment_id')
    .where('assignments.sprint_id', sprintId)
    .select('tasks.id')
}

function getTasksByAssignmentId (assignmentId, conn) {
  const db = conn || connection
  return db('assignments')
    .join('tasks', 'assignments.id', 'tasks.assignment_id')
    .where('assignments.id', assignmentId)
    .select('assignments.id', 'tasks.description')
}

function getAssignedTasksByAssignmentId (userId, assignmentId, conn) {
  const db = conn || connection
  return db('tasks')
    .join('assignedTasks', 'tasks.assignment_id', 'assignedTasks.task_id')
    .where('assignedTasks.user_id', userId)
    .andWhere('tasks.assignment_id', assignmentId)
    .select('tasks.id', 'tasks.description', 'assignedTasks.id', 'assignedTasks.complete')
}

function populateAssignedTasks (tasks, conn) {
  const db = conn || connection
  return db('assignedTasks')
    .insert(tasks)
}

function getAssignedTasks (userId, taskId, conn) {
  const db = conn || connection
  return db('tasks')
    .join('assignedTasks', 'tasks.id', 'assignedTasks.task_id')
    .join('users', 'users.id', 'assignedTasks.user_id')
    .where('assignedTasks.user_id', userId)
    .andWhere('assignedTasks.task_id', taskId)
    .select()
}

function getCommentsByAssignedTaskID (assignedTaskId, conn) {
  const db = conn || connection
  return db('comments')
    .join('assignedTasks', 'comments.assigned_task_id', 'assignedTasks.id')
    .where('comments.assigned_task_id', assignedTaskId)
    .select('comments.comment')
}

function createComment (comment, conn) {
  const db = conn || connection
  return db('comments')
    .insert({
      user_id: comment.userId,
      comment: comment.content,
      assigned_task_id: comment.assignedTaskId
    })
}
