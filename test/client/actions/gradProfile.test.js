/* global test expect */
import {requestGradProfile, receiveGradProfile} from '../../../client/actions/gradProfile'

test('requestGradProfile returns the correct action type', () => {
  const expected = 'REQUEST_GRAD_PROFILE'

  const actual = requestGradProfile()

  expect(actual.type).toBe(expected)
})

test('requestGradProfile returns the correct action', () => {
  const expected = {
    type: 'REQUEST_GRAD_PROFILE'
  }

  const actual = requestGradProfile()

  expect(actual).toEqual(expected)
})

test('receiveGradProfile returns the correct action type', () => {
  const expected = 'RECEIVE_GRAD_PROFILE'

  const actual = receiveGradProfile()

  expect(actual.type).toBe(expected)
})

test('receiveGradProfile returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_GRAD_PROFILE',
    userData: 'Elyse is the best'
  }

  const actual = receiveGradProfile('Elyse is the best')

  expect(actual).toEqual(expected)
})
