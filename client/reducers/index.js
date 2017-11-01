import {combineReducers} from 'redux'

import errorMessage from './error-message'
import userDetails from './user-details'
import busy from './busy'

export default combineReducers({
  errorMessage,
  userDetails,
  busy
})
