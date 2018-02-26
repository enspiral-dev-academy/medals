import {combineReducers} from 'redux'

import assessmentTags from './assessment-tags'
import errorMessage from './error-message'
import userDetails from './user-details'
import busy from './busy'
import assessmentQuestions from './assessment-questions'
import questionTag from './assessment-update-tags'

export default combineReducers({
  errorMessage,
  userDetails,
  busy,
  assessmentTags,
  assessmentQuestions,
  questionTag
})
