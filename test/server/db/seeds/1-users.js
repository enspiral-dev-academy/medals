const hash = require('../../../../server/auth/hash')

exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {id: 1, ghid: '14562', username: 'jules', hash: hash.generate('jules')},
    {id: 2, ghid: '89754', username: 'kimmi', hash: hash.generate('kimmi')},
    {id: 3, ghid: '45263', username: 'julia', hash: hash.generate('julia')},
    {id: 4, ghid: '78265', username: 'steve', hash: hash.generate('steve')},
    {id: 5, ghid: '76354', username: 'stina', hash: hash.generate('stina')}
  ])
}
