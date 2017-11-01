const path = require('path')

const defaults = {
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, '/migrations')
  }
}

const sqliteDefaults = Object.assign({
  client: 'sqlite3',
  useNullAsDefault: true,
  seeds: {
    directory: path.join(__dirname, '../../test/server/db/seeds')
  },
  pool: {
    afterCreate: (conn, cb) =>
      conn.run('PRAGMA foreign_keys = ON', cb)
  }
}, defaults)

const postgresDefaults = Object.assign({
  client: 'postgresql',
  pool: {
    min: 2,
    max: 10
  }
}, defaults)

module.exports = {
  development: Object.assign({
    connection: {
      filename: path.join(__dirname, 'dev.sqlite')
    }
  }, sqliteDefaults),

  test: Object.assign({
    connection: {
      filename: ':memory:'
    }
  }, sqliteDefaults),

  staging: Object.assign({
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    }
  }, postgresDefaults),

  production: Object.assign({
    connection: process.env.DATABASE_URL
  }, postgresDefaults)
}
