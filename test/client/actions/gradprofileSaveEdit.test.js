/* global test expect */
import {requestSaveGradProfile, receiveSaveGradProfile} from '../../../client/actions/gradProfileSaveEdit'

test('requestSaveGradProfile returns the correct action type', () => {
  const expected = 'REQUEST_SAVE_GRAD_PROFILE'

  const actual = requestSaveGradProfile()

  expect(actual.type).toBe(expected)
})

test('requestSaveGradProfile returns the correct action', () => {
  const expected = {
    type: 'REQUEST_SAVE_GRAD_PROFILE'
  }

  const actual = requestSaveGradProfile()

  expect(actual).toEqual(expected)
})

test('receiveSaveGradProfile returns the correct action type', () => {
  const expected = 'RECEIVE_SAVE_GRAD_PROFILE'

  const actual = receiveSaveGradProfile()

  expect(actual.type).toBe(expected)
})

test('receiveSaveGradProfile returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_SAVE_GRAD_PROFILE',
    userData: 'Emily is the best'
  }

  const actual = receiveSaveGradProfile('Emily is the best')

  expect(actual).toEqual(expected)
})
