const hash = require('../../../../server/auth/hash')

exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {id: 1, username: 'jules', hash: hash.generate('jules')},
    {id: 2, username: 'jimbo', hash: hash.generate('jimbo')},
    {id: 3, username: 'janej', hash: hash.generate('janej')}
  ])
}
