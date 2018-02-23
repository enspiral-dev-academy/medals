import {combineReducers} from 'redux'

import allUsers from './all-users'
import errorMessage from './error-message'
import userDetails from './user-details'
import busy from './busy'

export default combineReducers({
  allUsers,
  errorMessage,
  userDetails,
  busy
})
