import {
  RECEIVE_GRAD_PROFILE,
  REQUEST_GRAD_PROFILE
} from '../actions/gradProfile'

const initialState = {
  userId: 10,
  aboutMe: 'I am an about section',
  location: 'I am a location',
  github: 'I am a github link',
  portfolio: 'I am a portfolio',
  previousExperience: 'I am a previousExperience',
  interests: 'I am a intret'
}

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GRAD_PROFILE :
      return action.userData

    case REQUEST_GRAD_PROFILE :
      return {
        loading: action.loading
      }

    case 'EDIT_GRAD_PROFILE' :
      return {currentUser: action.currentUser}
    default :
      return state
  }
}

export default getUserReducer
