const getDbConn = require('knex')

const testConfig = require('../../../server/db/knexfile').test

module.exports = {
  // Test database connection
  getTestDb: () => getDbConn(testConfig),

  // Create a separate in-memory database before each test
  // In our tests, we can get at the database as `t.context.db`
  initialise: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },

  // Destroy the database connection after each test
  cleanup: (db) => {
    return db.destroy()
  }
}
