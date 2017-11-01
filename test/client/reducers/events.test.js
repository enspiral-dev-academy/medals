import {
  REQUEST_EVENT_LIST,
  RECEIVE_EVENT_LIST
} from '../../../client/actions/events'
import events from '../../../client/reducers/events'

test('events returns the event during RECEIVE_EVENT_LIST', () => {
  const currentState = {}
  const action = {
    type: RECEIVE_EVENT_LIST,
    events: {
      hosted: [{name: 'test hosted event'}],
      attended: [{name: 'test attended event'}]
    }
  }
  const newState = events(currentState, action)
  expect(newState.hosted[0]).toBe(action.events.hosted[0])
  expect(newState.attended[0]).toBe(action.events.attended[0])
})

test('events returns the initial state during REQUEST_EVENT_LIST', () => {
  const currentState = {
    hosted: [{name: 'test hosted event'}],
    attended: [{name: 'test attended event'}]
  }
  const action = {
    type: REQUEST_EVENT_LIST
  }
  const newState = events(currentState, action)
  expect(newState.hosted.length).toBe(0)
  expect(newState.attended.length).toBe(0)
})

test('activeEvent returns the current state by default', () => {
  const currentState = {
    details: {},
    registrations: ['test registration']
  }
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = events(currentState, action)
  expect(newState.registrations.length).toBe(1)
})
