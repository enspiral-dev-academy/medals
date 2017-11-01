import {
  LOG_OFF,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from '../../../client/actions/auth'
import userDetails from '../../../client/reducers/user-details'

test('userDetails returns user details during RECEIVE_USER_DETAILS', () => {
  const currentState = {}
  const action = {
    type: RECEIVE_USER_DETAILS,
    userDetails: {name: 'test name'}
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBe(action.userDetails)
})

test('userDetails returns null during REQUEST_USER_DETAILS', () => {
  const currentState = {name: 'test name'}
  const action = {
    type: REQUEST_USER_DETAILS
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBeNull()
})

test('userDetails returns null during LOG_OFF', () => {
  const currentState = {name: 'test name'}
  const action = {
    type: LOG_OFF
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBeNull()
})

test('activeEvent returns the current state by default', () => {
  const currentState = {name: 'test name'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBe(currentState)
})
