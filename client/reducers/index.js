import {combineReducers} from 'redux'

import assessmentTopics from './assessment-topics'
import errorMessage from './error-message'
import userDetails from './user-details'
import busy from './busy'

export default combineReducers({
  errorMessage,
  userDetails,
  busy,
  assessmentTopics
})
