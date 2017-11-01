import {
  REQUEST_EVENT_DETAILS,
  RECEIVE_EVENT_DETAILS
} from '../../../client/actions/events'
import activeEvent from '../../../client/reducers/active-event'

test('activeEvent returns the event during RECEIVE_EVENT_DETAILS', () => {
  const currentState = {}
  const action = {
    type: RECEIVE_EVENT_DETAILS,
    event: {
      details: {
        name: 'test event'
      }
    }
  }
  const newState = activeEvent(currentState, action)
  expect(newState.details.name).toBe(action.event.details.name)
})

test('activeEvent returns the initial state during REQUEST_EVENT_DETAILS', () => {
  const currentState = {
    details: {},
    registrations: ['test registration']
  }
  const action = {
    type: REQUEST_EVENT_DETAILS
  }
  const newState = activeEvent(currentState, action)
  expect(newState.registrations.length).toBe(0)
})

test('activeEvent returns the current state by default', () => {
  const currentState = {
    details: {},
    registrations: ['test registration']
  }
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = activeEvent(currentState, action)
  expect(newState.registrations.length).toBe(1)
})
