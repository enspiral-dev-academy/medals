import '../mocks/api'
import '../mocks/save-auth-token'

import {CLEAR_ERROR} from '../../../client/actions/error'

import {
  register,
  REQUEST_USER_REGISTRATION,
  RECEIVE_USER_REGISTRATION} from '../../../client/actions/auth'

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
