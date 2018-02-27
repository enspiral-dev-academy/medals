const env = require('./test-environment')
const db = require('../../../server/db/users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getUserById returns a user given their id', () => {
  return db.getUserById(1, testDb)
    .then(user => {
      expect(user.username).toBe('jules')
    })
})

test('getUserById returns undefined for a nonexistent user id', () => {
  return db.getUserById(9999, testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

test('getUserByName returns a user given their username', () => {
  return db.getUserByName('jules', testDb)
    .then(user => {
      expect(user.id).toBe(1)
    })
})

test('getUserByName returns undefined for a nonexistent username', () => {
  return db.getUserByName('whodat', testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

test('userExists returns true for an existing username', () => {
  return db.userExists('jules', testDb)
    .then(exists => {
      expect(exists).toBeTruthy()
    })
})

test('userExists returns false for a nonexistent username', () => {
  return db.userExists('whodat', testDb)
    .then(exists => {
      expect(exists).toBeFalsy()
    })
})

test('createUser creates a new user', () => {
  const username = 'iamnew'
  const validateNewUser = newUser => {
    expect(newUser.username).toBe(username)
  }
  return db.createUser(username, 'andnottoosecure', testDb)
    .then(validateNewUser)
})

test('createUser fails if username already exists', () => {
  const createNewUser = () => {
    return db.createUser('iamnew', 'password', testDb)
  }
  return createNewUser()
    .then(() => expect(createNewUser()).rejects.toBeDefined())
})

test('getGradProfileById returns the user at id 1', () => {
  return db.getGradProfileById(1, testDb)
    .then(user => {
      expect(user.id).toBe(1)
    })
})

test('getGradProfileById returns a user with the correct AboutMe info', () => {
  return db.getGradProfileById(1, testDb)
    .then(user => {
      expect(user.aboutMe).toBe('Who are you, and what do you care about?')
    })
})
