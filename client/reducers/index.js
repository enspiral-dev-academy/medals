import {combineReducers} from 'redux'

import busy from './busy'
import allUsers from './all-users'
import userDetails from './user-details'
import errorMessage from './error-message'
import getUserReducer from './gradProfileDetails'

export default combineReducers({
  busy,
  allUsers,
  userDetails,
  errorMessage,
  getUserReducer
})
