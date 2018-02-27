import {combineReducers} from 'redux'

import busy from './busy'
import sprints from './sprints'
import allUsers from './all-users'
import evalTags from './eval-tags'
import userDetails from './user-details'
import errorMessage from './error-message'
import evalQuestions from './eval-questions'
import questionTag from './eval-update-tags'
import getUserReducer from './gradProfileDetails'
import getGradTags from './getGradTags'
import userProfile from './userProfileDetails'

export default combineReducers({
  busy,
  sprints,
  allUsers,
  evalTags,
  userDetails,
  questionTag,
  errorMessage,
  evalQuestions,
  getUserReducer,
  getGradTags,
  userProfile
})
