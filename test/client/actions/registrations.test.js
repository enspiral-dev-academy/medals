import '../mocks/api'
import '../mocks/save-auth-token'

import {CLEAR_ERROR} from '../../../client/actions/error'

import {
  register,
  REQUEST_EVENT_REGISTRATION,
  RECEIVE_EVENT_REGISTRATION} from '../../../client/actions/registrations'

test('registering for an event dispatches the correct actions', () => {
  const dispatch = jest.fn()
  const registration = {
    eventId: 2,
    registrationUserId: 2,
    registrationName: 'test user'
  }
  return register(true, registration)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_EVENT_REGISTRATION)
      expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_EVENT_REGISTRATION)
      expect(dispatch.mock.calls[2][0].type).toBe(CLEAR_ERROR)
    })
})

test('unregistering for an event dispatches the correct actions', () => {
  const dispatch = jest.fn()
  const registration = {
    eventId: 2,
    registrationUserId: 2,
    registrationName: 'test user'
  }
  return register(false, registration)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_EVENT_REGISTRATION)
      expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_EVENT_REGISTRATION)
      expect(dispatch.mock.calls[2][0].type).toBe(CLEAR_ERROR)
    })
})
