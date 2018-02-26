const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getUser gets users id', () => {
  return db.getUserById(2, testDb)
    .then(user => {
      expect(user.id).toBe(2)
    })
})

test('getSprint gets sprint number', () => {
  return db.getSprintById(1, testDb)
    .then(sprint => {
      expect(sprint.number).toBe(0)
    })
})

test('getAssignmentsBySprintId returns correct assignment', () => {
  return db.getAssignmentsBySprintId(1, testDb)
    .then(assignment => {
      expect(assignment[0].title).toBe('How to waffle')
    })
})

test('getTasksByAssignmentId returns correct task', () => {
  return db.getTasksByAssignmentId(3, testDb)
    .then(task => {
      expect(task[0].description).toBe('Start Toggle')
    })
})

test('getAssignedTasks returns a boolean for complete', () => {
  return db.getAssignedTasks(1, 1, testDb)
    .then(assignedtask => {
      expect(assignedtask[0].user_id).toBe(1)
    })
})

test('getCommentsByAssignedTaskID returns the comment for an assigned task', () => {
  return db.getCommentsByAssignedTaskID(2, testDb)
    .then(comment => {
      expect(comment[0].comment).toBe('comment1')
    })
})

test('test inerting comment into table', () => {
  const comment = {
    userId: 1,
    content: 'hello lunnar',
    assignedTaskId: 2
  }
  return db.createComment(comment, testDb)
    .then(num => {
      expect(typeof num[0]).toBe('number')
    })
})
