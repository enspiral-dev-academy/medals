import {combineReducers} from 'redux'

import errorMessage from './error-message'
import userDetails from './user-details'
import busy from './busy'
import assignment from './assignments'

export default combineReducers({
  errorMessage,
  userDetails,
  busy,
  sprints: assignment
})
