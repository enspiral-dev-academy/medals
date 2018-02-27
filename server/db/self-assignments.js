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
    .join('assigned_tasks', 'tasks.assignment_id', 'assigned_tasks.task_id')
    .where('assigned_tasks.user_id', userId)
    .andWhere('tasks.assignment_id', assignmentId)
    .select('tasks.id', 'tasks.description', 'assigned_tasks.id', 'assigned_tasks.complete')
}

function populateAssignedTasks (tasks, conn) {
  const db = conn || connection
  return db('assigned_tasks')
    .insert(tasks)
}

function getAssignedTasks (userId, taskId, conn) {
  const db = conn || connection
  return db('tasks')
    .join('assigned_tasks', 'tasks.id', 'assigned_tasks.task_id')
    .join('users', 'users.id', 'assigned_tasks.user_id')
    .where('assigned_tasks.user_id', userId)
    .andWhere('assigned_tasks.task_id', taskId)
    .select()
}

function getCommentsByAssignedTaskID (assignedTaskId, conn) {
  const db = conn || connection
  return db('assignment_comments')
    .join('assigned_tasks', 'assignment_comments.assigned_task_id', 'assigned_tasks.id')
    .where('assignment_comments.assigned_task_id', assignedTaskId)
    .select('assignment_comments.comment')
}

function createComment (comment, conn) {
  const db = conn || connection
  return db('assignment_comments')
    .insert({
      user_id: comment.userId,
      comment: comment.content,
      assigned_task_id: comment.assignedTaskId
    })
}
