import '../mocks/api'
import '../mocks/save-auth-token'

import {CLEAR_ERROR} from '../../../client/actions/error'

import {
  register,
  REQUEST_USER_REGISTRATION,
  RECEIVE_USER_REGISTRATION,
  getAllUsers,
  REQUEST_ALL_USERS,
  RECEIVE_ALL_USERS,
  requestAllUsers,
  receiveAllUsers
} from '../../../client/actions/auth'

test('registering a user dispatches the correct actions', () => {
  const dispatch = jest.fn()
  return register()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_USER_REGISTRATION)
      expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_USER_REGISTRATION)
      expect(typeof dispatch.mock.calls[2][0]).toBe('function')
      expect(dispatch.mock.calls[3][0].type).toBe(CLEAR_ERROR)
    })
})

test('getAllUsers dispatches the correct actions', () => {
  const dispatch = jest.fn()
  return getAllUsers()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_ALL_USERS)
      expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_ALL_USERS)
      expect(dispatch.mock.calls[2][0].type).toBe(CLEAR_ERROR)
    })
})

test('receiveAllUsers returns correct action', () => {
  const allUsers = [{id: 1}, {id: 2}]
  const expectedAction = {
    type: RECEIVE_ALL_USERS,
    allUsers
  }
  expect(receiveAllUsers(allUsers)).toEqual(expectedAction)
})

test('requestAllUsers returns correct action', () => {
  const expectedAction = {
    type: REQUEST_ALL_USERS
  }
  expect(requestAllUsers()).toEqual(expectedAction)
})
