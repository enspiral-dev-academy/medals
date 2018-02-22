import {combineReducers} from 'redux'

import errorMessage from './error-message'
import userDetails from './user-details'
import busy from './busy'
import getUserReducer from './gradProfileDetails'

export default combineReducers({
  errorMessage,
  userDetails,
  busy,
  getUserReducer
})
