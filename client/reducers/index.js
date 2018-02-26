import {combineReducers} from 'redux'

import evalTags from './eval-tags'
import errorMessage from './error-message'
import userDetails from './user-details'
import busy from './busy'
import evalQuestions from './eval-questions'
import questionTag from './eval-update-tags'

export default combineReducers({
  errorMessage,
  userDetails,
  busy,
  evalTags,
  evalQuestions,
  questionTag
})
