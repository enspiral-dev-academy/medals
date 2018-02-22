const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getAssignmentsBySprintId returns correct assignment', () => {
  return db.getAssignmentsBySprintId(1, testDb)
    .then(assignment => {
      expect(assignment[0].title).toBe('kimmis cookies')
    })
})

test('getTasksByAssignmentId returns correct task', () => {
  return db.getTasksByAssignmentId(3, testDb)
    .then(task => {
      expect(task[0].description).toBe('smiles')
    })
})

test('getAssignedTasks returns a boolean for complete', () => {
  return db.getAssignedTasks(1, 1, testDb)
    .then(assignedtask => {
      expect(assignedtask[0].user_id).toBe(1)
    })
})
