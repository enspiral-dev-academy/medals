const env = require('./test-environment')
const db = require('../../../server/db/eval')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getQuestionById returns a question with provided id', () => {
  return db.getQuestionById(1, testDb)
    .then(questions => {
      expect(questions.question).toBe('Who created JavaScript?')
    })
})

test('getQuestionById returns undefined for a nonexistent question id', () => {
  return db.getQuestionById(9999, testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

test('getTagByName returns a tag id given the tag name', () => {
  return db.getTagByName('JavaScript', testDb)
    .then(tag => {
      expect(tag.id).toBe(1)
    })
})

test('getTagByName returns undefined for a nonexistent tag', () => {
  return db.getTagByName('Wonky', testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

test('getQuizTypeByName returns a tag id given the quiz type', () => {
  return db.getQuizTypeByName('multichoice', testDb)
    .then(type => {
      expect(type.id).toBe(1)
    })
})

test('getQuizTypeByName returns undefined for a nonexistent quiz type', () => {
  return db.getQuizTypeByName('strange', testDb)
    .then(type => {
      expect(type).toBeFalsy()
    })
})

test('getQuestionResponsesById returns four responses with a provided id', () => {
  return db.getQuestionResponsesById(1, testDb)
    .then(responses => {
      expect(responses).toHaveLength(4)
    })
})

test('getQuestionResponsesById returns an empty array for a nonexistent question id', () => {
  return db.getQuestionResponsesById(99999, testDb)
    .then(responses => {
      expect(responses).toHaveLength(0)
    })
})
