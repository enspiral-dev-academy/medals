const connection = require('./connection')

module.exports = {
  getSprints,
  getUserById,
  getSprintById,
  getAssignmentsBySprintId,
  getTasksByAssignmentId,
  getAssignedTasks,
  getCommentsByAssignedTaskID,
  createComment
}

function getSprints (conn) {
  const db = conn || connection
  return db('sprints')
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

function getTasksByAssignmentId (assignmentId, conn) {
  const db = conn || connection
  return db('assignments')
    .join('tasks', 'assignments.id', 'tasks.assignment_id')
    .where('assignments.id', assignmentId)
    .select('assignments.id', 'tasks.description')
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
