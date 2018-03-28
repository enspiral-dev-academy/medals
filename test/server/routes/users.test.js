import request from 'supertest'
import getToken from './get-token'

jest.mock('../../../server/db/users', () => ({
  getAllUsers: () => Promise.resolve([
    {id: 1, ghid: '12345', username: 'test', hash: null, is_approved: true},
    {id: 2, ghid: '125555', username: 'foo', hash: null, is_approved: false}
  ]),
  getUserById: () => Promise.resolve(
    {id: 1, ghid: '12345', username: 'test', hash: null, is_approved: true}
  )
}))

jest.mock('../../../server/routes/github', () => () => {})

// eslint-disable-next-line import/first
import server from '../../../server/server'

test('/ route returns an object of length 2', () => {
  return request(server)
    .get('/api/v1/users')
    .set('Authorization', `Bearer ${getToken()}`)
    .expect(200)
    .then((res) => {
      expect(res.body.length).toBe(2)
      expect(res.body[1].username).toBe('foo')
    })
})

test('/:id route returns correct object', () => {
  return request(server)
    .get('/api/v1/users/2')
    .set('Authorization', `Bearer ${getToken()}`)
    .expect(200)
    .then((res) => {
      expect(res.body.username).toBe('test')
    })
})
