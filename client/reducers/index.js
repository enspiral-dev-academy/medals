import {combineReducers} from 'redux'

import busy from './busy'
import sprints from './sprints'
import allUsers from './all-users'
import userDetails from './user-details'
import errorMessage from './error-message'
import getUserReducer from './gradProfileDetails'

export default combineReducers({
  busy,
  sprints,
  allUsers,
  userDetails,
  errorMessage,
  getUserReducer
})
