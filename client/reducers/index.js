import {combineReducers} from 'redux'

import assessmentTopics from './assessment-topics'
import errorMessage from './error-message'
import userDetails from './user-details'
import busy from './busy'
import assessmentQuestions from './assessment-questions'
import questionTopic from './assessment-updateTopic'

export default combineReducers({
  errorMessage,
  userDetails,
  busy,
  assessmentTopics,
  assessmentQuestions,
  questionTopic
})
