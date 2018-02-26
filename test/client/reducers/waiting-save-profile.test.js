/* global test expect */
import reducer from '../../../client/reducers/waitingSaveProfile'

test('waitingSaveProfie initial state of undefined', () => {
  const expectedInitialState = true
  const action = {
    type: 'REQUEST_SAVE_GRAD_PROFILE'
  }
  const actualState = reducer(expectedInitialState, action)

  expect(actualState).toEqual(expectedInitialState)
})

test('waitingSaveProfie initial state of undefined', () => {
  const expectedInitialState = false
  const action = {
    type: 'RECEIVE_SAVE_GRAD_PROFILE'
  }
  const actualState = reducer(expectedInitialState, action)

  expect(actualState).toEqual(expectedInitialState)
})
