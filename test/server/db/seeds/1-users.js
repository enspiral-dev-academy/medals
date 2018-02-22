const hash = require('../../../../server/auth/hash')

exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {id: 1, ghid: '1A', username: 'stina', hash: hash.generate('stina')},
    {id: 2, ghid: '2B', username: 'kimmi', hash: hash.generate('kimmi')},
    {id: 3, ghid: '3C', username: 'julia', hash: hash.generate('julia')},
    {id: 4, ghid: '4D', username: 'steve', hash: hash.generate('steve')},
    {id: 5, ghid: '5E', username: 'jules', hash: hash.generate('jules')}
  ])
}
