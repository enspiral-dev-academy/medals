import {SHOW_ERROR, CLEAR_ERROR} from '../../../client/actions/error'
import errorMessage from '../../../client/reducers/error-message'

test('errorMessage returns the error message during SHOW_ERROR', () => {
  const action = {
    type: SHOW_ERROR,
    errorMessage: 'test error message'
  }
  const newState = errorMessage('', action)
  expect(newState).toBe(action.errorMessage)
})

test('errorMessage returns an empty string during CLEAR_ERROR', () => {
  const action = {type: CLEAR_ERROR}
  const newState = errorMessage('current error message', action)
  expect(newState).toBe('')
})

test('errorMessage returns the current state by default', () => {
  const currentState = 'current error message'
  const action = {type: 'UNKNOWN_ACTION_TYPE'}
  const newState = errorMessage(currentState, action)
  expect(newState).toBe(currentState)
})
