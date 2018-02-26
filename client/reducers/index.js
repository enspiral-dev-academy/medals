import {combineReducers} from 'redux'

import busy from './busy'
import allUsers from './all-users'
import userDetails from './user-details'
import errorMessage from './error-message'

export default combineReducers({
  allUsers,
  errorMessage,
  userDetails,
  busy
})
